# calculator

### Run locally

```shell
npm install
npm start
```

### Deploy to GitHub pages

```shell
git checkout gh-pages && git merge main
npm run build
git add dist && git commit -m "Build at $(date)"
git push origin gh-pages
```

Then go to https://mdibyo.github.io/simple-calculator/dist/index.html to see results.
