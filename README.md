# vhelm
helm charts

steps
- helm create my-sample-chart
- helm package my-sample-chart
- helm repo index . --url https://vermavarun.github.io/vhelm
- git add .
- git commit -m "Add my-sample-chart"
- git push origin main



# chart locations

- https://github.com/users/vermavarun/packages/container/package/my-sample-chart


# chart usage:

- helm registry login ghcr.io
- helm repo add vhelm https://vermavarun.github.io/vhelm
- helm install my-release oci://ghcr.io/vermavarun/my-sample-chart --version 0.1.0
- helm install myapp oci://ghcr.io/varunverma/my-sample-chart --version 0.1.0
