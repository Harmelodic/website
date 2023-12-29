# website

My personal website, found at [harmelodic.com](https://harmelodic.com)

# Deployment

1. Ensure [cert-manager](https://cert-manager.io/) is installed on the Kubernetes cluster.

2. Ensure an [NGINX Ingress Controller](https://kubernetes.github.io/ingress-nginx/) is installed on the Kubernetes cluster, with an Ingress Class `main`

3. Create a Secret called `cert-manager-route53` containing:
   1. The key `secret-access-key` with value set to the AWS Secret Access Key for the AWS Account that the LetsEncrypt Issuer uses. 

4. Run Kustomize on the `kustomize` directory, and point to the namespace you want to deploy to.

## TODO

- Cookie settings / info
- Accessibility theming (colour blindness, high-contrast)
- Split personal blog, software blog, films seen and tv shows seen into subsections of Blog
- Add a featured-in page
- Convert to Next.js application?
- Write a comprehensive test suite, using:
    - Jest
    - Jest Snapshot Testing
    - React Testing Library?
    - `react-test-renderer`?

### Need to Test

- UI Components
- UI Pages
- Custom Hooks
- Redux Store setup
- Redux State slices
