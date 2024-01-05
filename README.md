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
- Blog split
  - Software Engineering
    - Software thoughts
    - Management / Ways of Working thoughts
  - Other
    - Personal blogs
    - Lists
      - Films seen
      - TV shows seen
- Add a featured-in page
- Convert to Next.js application?
- Write a comprehensive test suite, see below.

### Testing

| Functionality to test                               | Issues / Things to consider                   | System of testing                                |
|-----------------------------------------------------|-----------------------------------------------|--------------------------------------------------|
| UI components look                                  | Theme Provider                                | Jest + unknown - some sort of "render" + photo?* |
| UI pages look correct                               | Theme Provider, Mocking Hooks, Redux Provider | Jest + unknown - some sort of "render" + photo?* |
| Custom Hooks act correctly.                         | Mocking called methods, single-use useEffects | Pure Jest?                                       |
| Redux Store setup/initial-state results correctly   |                                               | Pure Jest?                                       |
| Redux State slice reducers work correctly           |                                               | Pure Jest?                                       |

*Snapshot Testing is common here, but they don't really give nice way of showing a developer to meaning of the change. 
