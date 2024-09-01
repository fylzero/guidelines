# Getting Started / Contributing

## How to submit changes

### Method 1 (Quick Updates)

Simple edits/updates can be made by editing pages in Github and submitting PRs without the need to pull down and build the repo.

- Visit https://github.com/fylzero/guidelines/tree/main/docs
- Select the .md file you wish to edit
- Click the pencil icon (Edit This File) next to mthe raw/blame buttons
- Make the desired changes to the file
- At the bottom of the page under `Commit Changes`, make sure "Create a new branch..." is selected
- Add a description of the proposed changes and enter a branch name
- Click `Propose Changes`
- Your PR will be reviewed, once accepted your changes will be live shortly after

### Method 2

Clone the repo, build npm, and submit PRs as you would any other project.

- In your terminal, go to your projects folder and type...

```
git clone git@github.com:fylzero/guidelines.git
npm install
npm run docs:dev
```

- Then open `http://localhost:5173/guidelines/` in web browser
- Create a new branch
- Content can be added/updated via md files contained in the `/docs` folder
- Menu entries can be added/updated in the `docs/.vitepress/config.js` file
- More information about VitePress can be found [here](https://vitepress.vuejs.org/)
- Once you are happy with the suggested changes, commit and push to a remote branch
- Then visit https://github.com/fylzero/guidelines and submit a PR
- Your PR will be reviewed, once accepted your changes will be live shortly after
