- conectar:
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

- con SSH:
git remote add origin git remote add origin git@github.com:jivan0017/tipsterbyte-api-main.git

- crear rama main en local y pasarnos a ella:
 git checkout -b main

- subir cambios al repositorio main:
git push -u origin main

- esto no por ahora!
git remote add origin https://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@github.com/jaimediaz817/ventas-nest-api.git

- esto no por ahora!
git remote set-url origin https://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@github.com/jaimediaz817/ventas-nest-api.git

- Settear el ssh:
https://es.stackoverflow.com/questions/201496/git-push-the-requested-url-returned-error-403

- video explicativo SSH
https://www.youtube.com/watch?v=g0ZV-neSM7E

- creando clave ssh asimetrica
 ssh-keygen -t ed25519 -C "jaimeivan0017@gmail.com"


# ESTO ES EN PRODUCCIÓN - VPS
 - agregar la clave al agente ssh
 eval `ssh-agent -s`

- enlazar la clave privada: identidad agregada al agente ssh
ssh-add ~/.ssh/id_ed25519

- poner en memoria la clave:
clip < ~/.ssh/id_ed25519.pub

ssh-ed25519 AAAAC3NzaC1lZDI1NTE5AAAAIEu/+THzDSVtiv5mn/EqEXUg4c0pvMDPZKv4TLt8ohT1 jaimeivan0017@gmail.com

- enlace
git remote set-url origin git@github.com:jivan0017/ventas-udemy-api.git
git remote set-url origin https://github.com/jivan0017/tipsterbyte-api-main.git

