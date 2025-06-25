# vhelm
helm charts

steps
- helm create my-sample-chart
- helm package my-sample-chart
- helm repo index . --url https://vermavarun.github.io/vhelm
- git add .
- git commit -m "Add my-sample-chart"
- git push origin main
