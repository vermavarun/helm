# vhelm

[![Build and Push Docker Images](https://github.com/vermavarun/vhelm/actions/workflows/build-images.yaml/badge.svg)](https://github.com/vermavarun/vhelm/actions/workflows/build-images.yaml)
[![pages-build-deployment](https://github.com/vermavarun/vhelm/actions/workflows/pages/pages-build-deployment/badge.svg)](https://github.com/vermavarun/vhelm/actions/workflows/pages/pages-build-deployment)
[![Publish Helm Chart to GHCR](https://github.com/vermavarun/vhelm/actions/workflows/build-charts.yaml/badge.svg)](https://github.com/vermavarun/vhelm/actions/workflows/build-charts.yaml)

# local package steps

- helm create my-sample-chart
- helm package my-sample-chart
- helm repo index . --url https://vermavarun.github.io/vhelm
- git add .
- git commit -m "Add my-sample-chart"
- git push origin main

---

# chart locations

- https://github.com/users/vermavarun/packages/container/package/my-sample-chart

---

# chart usage:

- helm registry login ghcr.io
- helm repo add vhelm https://vermavarun.github.io/vhelm
- helm install my-release oci://ghcr.io/vermavarun/my-sample-chart --version 0.1.0
- helm install myapp oci://ghcr.io/varunverma/my-sample-chart --version 0.1.0
- `helm install mycalculator oci://ghcr.io/vermavarun/calculator  --version 0.1.3`

---

# notes

- helm repo add bitnami https://charts.bitnami.com/bitnami
- helm repo update bitnami
- helm search repo bitnami
    - helm search repo bitnami | grep nginx # or -I for case insenstivity
- helm install <release-name> bitnami/<chart>
  - helm install nginxv1 bitnami/nginx
- Helm uninstall <release-name>
  - Helm uninstall nginxv1
- Helm list
- Helm create <chart-name> # create folder structure for us
- Helm package <package-chart-name>
  - Helm package shipping
- Helm repo index .
- Helm show values <chart-name>
  - Helm show values eks/aws-load-balancer-controller
- Chart.yaml has metadata like owner
- Values.yaml contains customization values
- Templates folder has deployment.yaml files, service.yml files all yaml files needed for resources

# todo

- tests directory for calculator
- publish zip file also and check in the repo using GHA