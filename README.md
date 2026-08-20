# Personal Portfolio Website

A polished, responsive personal portfolio built with React, Vite, JavaScript, HTML5 and CSS3.

This project follows the supplied portfolio brief: it is a static site, uses a restrained warm forest-green visual identity, contains seven main sections, displays exactly three projects, and is designed to be easy for a beginner to customise before publishing to GitHub Pages.

## 1. Technologies

- React
- Vite
- JavaScript
- JSX
- HTML5
- CSS3
- GitHub Pages
- GitHub Actions

No database, backend, authentication, paid API or contact-form backend is required.

## 2. Project structure

```text
portfolio/
├── public/
│   ├── images/
│   │   ├── profile.jpg
│   │   ├── project-1.jpg
│   │   ├── project-2.jpg
│   │   └── project-3.jpg
│   └── cv/
│       └── my-cv.pdf
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Skills.jsx
│   │   ├── Projects.jsx
│   │   ├── ProjectCard.jsx
│   │   ├── Education.jsx
│   │   ├── Experience.jsx
│   │   ├── Contact.jsx
│   │   └── Footer.jsx
│   ├── data/
│   │   ├── profile.js
│   │   └── projects.js
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── .github/
│   └── workflows/
│       └── deploy.yml
├── .gitignore
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

## 3. Install and run locally

You need Node.js and npm installed.

Open the project folder in VS Code.

Open the VS Code terminal and run:

```bash
npm install
```

Then:

```bash
npm run dev
```

Vite will show a local address, normally something similar to:

```text
http://localhost:5173/
```

Open that address in your browser.

## 4. Test the production build

Run:

```bash
npm run build
```

If the build succeeds, Vite creates the `dist` folder.

You can preview the production build with:

```bash
npm run preview
```

## 5. Customise your personal information

### Name, title, location and links

Open:

```text
src/data/profile.js
```

At the top, replace:

```js
name: "[YOUR NAME]",
initials: "[YN]",
title: "[YOUR PROFESSIONAL TITLE]",
location: "[YOUR LOCATION]",
email: "[YOUR EMAIL]",
github: "[YOUR GITHUB URL]",
linkedin: "[YOUR LINKEDIN URL]",
```

Use your real information. Do not leave placeholder values in the final published portfolio.

### Hero section

In the same file, edit:

```js
hero: {
  eyebrow: "...",
  introduction: "..."
}
```

### About Me

Edit:

```js
about: {
  background: "...",
  interests: "...",
  learningFocus: "...",
  motivation: "...",
  careerGoals: "..."
}
```

### Skills

Edit:

```js
skills: {
  technical: [...],
  soft: [...]
}
```

Do not add proficiency percentages unless you genuinely want them and have real information to support them. The supplied brief specifically avoids artificial percentages.

### Education

Edit the `education` array in:

```text
src/data/profile.js
```

Example structure:

```js
education: [
  {
    qualification: "[YOUR QUALIFICATION]",
    institution: "[YOUR INSTITUTION]",
    dates: "[START YEAR – END YEAR]",
    areas: "[RELEVANT SUBJECTS]",
    description: "[SHORT DESCRIPTION]"
  }
]
```

Add additional entries by copying the object if you have more than one qualification.

### Current AI learning

Edit:

```js
currentLearning: {
  programme: "[AI TRAINING PROGRAMME NAME]",
  provider: "[TRAINING PROVIDER]",
  date: "[DATE / YEAR]",
  description: "[SHORT DESCRIPTION]"
}
```

Do not invent the provider or qualification.

### Experience and professional development

Edit:

```js
professionalDevelopment: {
  statement: "...",
  entries: [...]
}
```

The initial entries are placeholders because the supplied brief says not to invent employment history.

When you later have real employment, internships, volunteering or other experience, replace the placeholders with real information.

## 6. Add your three projects

Open:

```text
src/data/projects.js
```

There are exactly three project objects.

For each project replace:

- `title`
- `description`
- `objective`
- `contribution`
- `technologies`
- `skills`
- `image`

Do not create fake project links. The project cards intentionally do not require public links.

Keep exactly three entries to match the supplied project requirement.

## 7. Add your profile photo

Replace:

```text
public/images/profile.jpg
```

with your own profile photograph.

Keep the filename:

```text
profile.jpg
```

unless you also update the path in `Hero.jsx`.

The website includes a fallback so the layout does not collapse if the image is missing.

## 8. Add project images

Replace:

```text
public/images/project-1.jpg
public/images/project-2.jpg
public/images/project-3.jpg
```

with your own images.

Keep the filenames, or update the corresponding `image` values in `src/data/projects.js`.

The project image area has a fallback colour so a missing image does not destroy the page layout.

## 9. Add your CV

The supplied brief requires:

```text
public/cv/my-cv.pdf
```

Replace the included placeholder PDF with your real CV.

Do NOT put a fake CV online.

The navigation button and hero button already point to:

```text
/cv/my-cv.pdf
```

## 10. Update SEO

Open:

```text
index.html
```

Replace:

```html
[YOUR NAME]
[YOUR PROFESSIONAL TITLE]
```

in the `<title>` and Open Graph metadata.

You can also edit the meta description to accurately describe yourself.

## 11. Test before GitHub

Check all of these manually:

- `npm install` works
- `npm run dev` works
- `npm run build` works
- There are no browser console errors
- Navigation links work
- Mobile hamburger menu works
- Download CV button points to `/cv/my-cv.pdf`
- Email link opens your email application
- GitHub link is correct
- LinkedIn link is correct
- Profile image appears
- Three project images appear
- Exactly three project entries are shown
- All seven main sections are present:
  - Home
  - About
  - Skills
  - Projects
  - Education
  - Experience & Professional Development
  - Contact
- The site has no horizontal scrolling
- Text is readable on mobile
- Buttons are usable on mobile
- Images have meaningful alt text
- Colour contrast remains readable

## 12. Push the project to GitHub

First create a new empty repository on GitHub.

Then in VS Code, open the terminal in the project folder and run:

```bash
git init
git add .
git commit -m "Create personal portfolio website"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPOSITORY.git
git push -u origin main
```

Replace the remote URL with your actual GitHub repository URL.

If Git asks you to sign in, complete GitHub's authentication process.

## 13. Publish with GitHub Pages

This project includes:

```text
.github/workflows/deploy.yml
```

The workflow builds the Vite site and publishes it to GitHub Pages.

After pushing to GitHub:

1. Open your repository on GitHub.
2. Go to **Settings**.
3. Select **Pages**.
4. Under the build/deployment area, choose **GitHub Actions** if GitHub has not already selected it.
5. Go to the **Actions** tab.
6. Wait for the deployment workflow to complete successfully.
7. Return to **Settings → Pages** to see the published site address.

The Vite configuration automatically uses the repository name as the GitHub Pages base path during the GitHub Actions build.

Your published address will normally follow this pattern:

```text
https://YOUR-USERNAME.github.io/YOUR-REPOSITORY/
```

## 14. Future edits

After making changes:

```bash
git add .
git commit -m "Update portfolio content"
git push
```

GitHub Actions will build and redeploy the site.

## 15. Beginner customisation checklist

Before publishing, replace every remaining placeholder:

- [ ] Name
- [ ] Initials
- [ ] Professional title
- [ ] Location
- [ ] Email
- [ ] GitHub URL
- [ ] LinkedIn URL
- [ ] Hero introduction
- [ ] About background
- [ ] Professional interests
- [ ] Learning focus
- [ ] Motivation
- [ ] Career goals
- [ ] Technical skills
- [ ] Soft skills
- [ ] Education
- [ ] AI training programme
- [ ] Professional development
- [ ] Project 1
- [ ] Project 2
- [ ] Project 3
- [ ] Profile photo
- [ ] Project images
- [ ] Real CV
- [ ] SEO title
- [ ] SEO description

## Important

This starter project intentionally does not invent your personal information, qualifications, employment history, projects or social links. Replace placeholders with your real details before submitting or publishing the portfolio.
