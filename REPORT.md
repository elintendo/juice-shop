# DevSecOps CI/CD Pipeline - Lab Report

**Student:** [Your Name]  
**Course:** Secure Development  
**Date:** [Date]

---

## Table of Contents

1. [Task 1: Pipeline Foundation and Build](#task-1-pipeline-foundation-and-build)
2. [Task 2: Secrets and Credentials](#task-2-secrets-and-credentials)
3. [Task 3: SAST (Static Application Security Testing)](#task-3-sast-static-application-security-testing)
4. [Task 4: SCA / Dependency Scanning](#task-4-sca--dependency-scanning)
5. [Task 5: Container and Image Security](#task-5-container-and-image-security)
6. [Task 6: Reporting, Metrics, and Evidence](#task-6-reporting-metrics-and-evidence)

---

## Task 1: Pipeline Foundation and Build

### Objective
Create a CI/CD pipeline that runs on pushes to the main branch, checks out code, installs dependencies, builds the project, and runs tests. The pipeline must fail if tests fail.

### Implementation

#### Repository Setup
- **Application:** OWASP Juice Shop (forked)
- **CI/CD Platform:** GitHub Actions
- **Repository URL:** [Your GitHub Repository URL]

#### Pipeline Configuration

**Trigger Conditions:**
- Triggers on push to `main` branch
- Triggers on pull requests targeting `main` branch

**Pipeline Stages:**
1. **Checkout:** Retrieves the code from the repository
2. **Setup Node.js:** Installs Node.js v18 with npm caching
3. **Install Dependencies:** Runs `npm ci` to install exact versions from lock file
4. **Build Project:** Runs `npm run build` to compile the application
5. **Run Tests:** Executes `npm test` with `continue-on-error: false` to fail the pipeline if tests fail
6. **Upload Artifacts:** Stores build artifacts for 7 days (only on success)

#### Local Reproduction

A Docker-based script (`build-local.sh`) is provided to reproduce the CI/CD build locally:

```bash
chmod +x build-local.sh
./build-local.sh
```

**Script features:**
- Builds Docker image for Juice Shop
- Runs tests inside Docker container
- Provides clear success/failure indicators
- Includes instructions to run the application locally

**Manual Docker commands:**
```bash
# Build the image
docker build -t juice-shop-local:latest .

# Run tests
docker run --rm juice-shop-local:latest npm test

# Run the application
docker run -p 3000:3000 juice-shop-local:latest
```

### Screenshots

#### Screenshot 1: Successful Pipeline Run
![Successful Pipeline Run](screenshots/task1-success.png)
*Pipeline successfully completes all stages: checkout, install, build, test*

#### Screenshot 2: Failed Pipeline on Test Failure
![Failed Pipeline](screenshots/task1-failure.png)
*Pipeline fails when tests fail, blocking the release*

#### Screenshot 3: Local Build Success
![Local Build](screenshots/task1-local-build.png)
*Local reproduction using Docker script*

### Evidence
- Pipeline configuration: `.github/workflows/ci-pipeline.yml`
- Local build script: `build-local.sh`
- Build artifacts retained for 7 days in GitHub Actions

### Branch Behavior
- **Main branch:** All pushes trigger the full pipeline
- **Feature branches:** Pull requests to main trigger the same checks
- **Failed builds:** Block merges and deployments until fixed

---

## Task 2: Secrets and Credentials

*[To be completed]*

---

## Task 3: SAST (Static Application Security Testing)

*[To be completed]*

---

## Task 4: SCA / Dependency Scanning

*[To be completed]*

---

## Task 5: Container and Image Security

*[To be completed]*

---

## Task 6: Reporting, Metrics, and Evidence

*[To be completed]*

---

## Conclusion

*[To be completed after all tasks]*