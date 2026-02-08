# Setup Instructions - Task 1

## Step 1: Fork OWASP Juice Shop

1. Go to the official OWASP Juice Shop repository:
   ```
   https://github.com/juice-shop/juice-shop
   ```

2. Click the **Fork** button in the top-right corner

3. Choose your GitHub account as the destination

4. Wait for the fork to complete

## Step 2: Clone Your Fork Locally

```bash
git clone https://github.com/YOUR-USERNAME/juice-shop.git
cd juice-shop
```

Replace `YOUR-USERNAME` with your actual GitHub username.

## Step 3: Add Pipeline Files

Copy the prepared files from the `lab1` folder into your cloned repository:

```bash
# Copy GitHub Actions workflow
mkdir -p .github/workflows
cp /path/to/lab1/.github/workflows/ci-pipeline.yml .github/workflows/

# Copy local build script
cp /path/to/lab1/build-local.sh .

# Make the script executable
chmod +x build-local.sh

# Copy documentation
cp /path/to/lab1/REPORT.md .
cp /path/to/lab1/SETUP.md .

# Create screenshots directory
mkdir -p screenshots
```

## Step 4: Commit and Push to Main Branch

```bash
# Add all new files
git add .github/workflows/ci-pipeline.yml
git add build-local.sh
git add REPORT.md
git add SETUP.md
git add screenshots/

# Commit with descriptive message
git commit -m "Add Task 1: CI/CD Pipeline Foundation"

# Push to main branch (this will trigger the pipeline)
git push origin main
```

## Step 5: Verify Pipeline Execution

1. Go to your GitHub repository in the browser
2. Click on the **Actions** tab
3. You should see a workflow run triggered by your push
4. Click on the running workflow to see real-time logs
5. Wait for the pipeline to complete

### Expected Behavior:
- ✅ Checkout code should succeed
- ✅ Node.js setup should succeed
- ✅ Install dependencies should succeed
- ✅ Build project should succeed
- ✅ Run tests should succeed (or may fail if there are test issues)

## Step 6: Test Local Build

From your repository root:

```bash
# Run the local build script
./build-local.sh
```

This will:
1. Build a Docker image
2. Run tests inside the container
3. Show success/failure status

## Step 7: Take Screenshots

For your report, capture the following screenshots:

1. **task1-success.png**: Successful pipeline run (all green checks)
   - Navigate to Actions → Click on successful workflow run
   - Take full-page screenshot

2. **task1-failure.png**: Failed pipeline (introduce a failing test)
   - Temporarily break a test or add a failing test
   - Push and capture the failed run
   - Then revert the change

3. **task1-local-build.png**: Local build execution
   - Screenshot of terminal showing `./build-local.sh` output

Save all screenshots in the `screenshots/` directory.

## Step 8: Update Report

Edit `REPORT.md`:
- Add your name and date
- Add your repository URL
- Verify Task 1 documentation is accurate
- Reference your screenshots correctly

## Troubleshooting

### Issue: Pipeline doesn't trigger
- Check that you pushed to the `main` branch
- Verify `.github/workflows/ci-pipeline.yml` is in the correct location
- Check GitHub Actions are enabled in your repository settings

### Issue: Tests fail in pipeline
- This is expected behavior if Juice Shop has test issues
- Document the failure in your report
- You can show both passing and failing scenarios

### Issue: Docker build fails locally
- Ensure Docker is installed and running
- Check that you're in the repository root directory
- Verify Dockerfile exists (it should be in the Juice Shop repo)

### Issue: npm ci fails
- Try `npm install` instead (update the workflow file)
- Ensure `package-lock.json` exists

## Next Steps

Once Task 1 is complete and documented:
1. Save all screenshots
2. Complete the Task 1 section in REPORT.md
3. Commit and push your report updates
4. Proceed to Task 2: Secrets and Credentials