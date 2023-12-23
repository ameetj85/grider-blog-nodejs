## Important - DO NOT SKIP - Ingress Nginx Installation Info

Github: https://kubernetes.github.io/ingress-nginx/

In the upcoming lecture, we will be installing Ingress Nginx. In the video, it is shown that there is a required mandatory command that needed to be run for all providers. This has since been removed, so, the provider-specific commands (Docker Desktop, Minikube, etc) are all that is required. Many students are incorrectly installing the wrong library and are meeting errors and issues. Please triple-check that you are installing #### Ingress Nginx and not Nginx Ingress, which is a totally different and incompatible library.

Note - Windows students should be using Docker Desktop with WSL2 and not Minikube.

### Installation - Docker Desktop (macOS and Windows WSL2)

#### If you have Helm, you can deploy the ingress controller with the following command:

helm upgrade --install ingress-nginx ingress-nginx \
 --repo https://kubernetes.github.io/ingress-nginx \
 --namespace ingress-nginx --create-namespace

#### If you prefer to use a YAML manifest, you can run the following command instead:

kubectl apply -f https://raw.githubusercontent.com/kubernetes/ingress-nginx/controller-v1.8.2/deploy/static/provider/cloud/deploy.yaml

#### Github Repo:

https://kubernetes.github.io/ingress-nginx/deploy/#quick-start
