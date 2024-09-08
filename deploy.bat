cd ./.output/public
git init
git add .
git commit -m "deploy"
git branch main
git remote add origin https://github.com/ConsoleLZ/navgation_dist.git
git push --force origin main