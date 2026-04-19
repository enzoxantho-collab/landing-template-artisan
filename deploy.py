#!/usr/bin/env python3
"""
Deploy script — Upload dist/ to Hostinger via FTP
Usage: python3 deploy.py
"""

import ftplib
import os

# ============================================
# MODIFIER CES VALEURS POUR CHAQUE CLIENT
# ============================================
FTP_HOST     = "heraultplomberie.fr"
FTP_USER     = "u915731663"
FTP_PASS     = "CHANGE_ME"
REMOTE_PATH  = "/domains/heraultplomberie.fr/public_html"
# ============================================

LOCAL_DIR = os.path.join(os.path.dirname(__file__), "dist")

def upload_dir(ftp, local_path, remote_name):
    try:
        ftp.mkd(remote_name)
    except:
        pass
    ftp.cwd(remote_name)
    for item in os.listdir(local_path):
        if item in ('.DS_Store',):
            continue
        local_item = os.path.join(local_path, item)
        if os.path.isfile(local_item):
            with open(local_item, 'rb') as f:
                ftp.storbinary(f'STOR {item}', f)
                print(f"  ✓ {remote_name}/{item}")
        elif os.path.isdir(local_item):
            upload_dir(ftp, local_item, item)
    ftp.cwd('..')

def main():
    print(f"Connexion à {FTP_HOST}...")
    ftp = ftplib.FTP(FTP_HOST)
    ftp.login(FTP_USER, FTP_PASS)
    ftp.cwd(REMOTE_PATH)
    print(f"Connecté → {REMOTE_PATH}")

    for item in os.listdir(LOCAL_DIR):
        if item in ('.DS_Store',):
            continue
        local_item = os.path.join(LOCAL_DIR, item)
        if os.path.isfile(local_item):
            with open(local_item, 'rb') as f:
                ftp.storbinary(f'STOR {item}', f)
                print(f"  ✓ {item}")
        elif os.path.isdir(local_item):
            upload_dir(ftp, local_item, item)

    ftp.quit()
    print("\n✅ Deploy terminé !")

if __name__ == "__main__":
    main()
