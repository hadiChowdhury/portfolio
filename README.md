# 🚀 Md. Abdul Hadi Chowdhury — Portfolio

Personal portfolio website built with HTML, CSS, and vanilla JavaScript. Hosted free on GitHub Pages.

**Live site:** `https://hadiChowdhury.github.io/portfolio`

---

## 📁 File Structure

```
portfolio/
├── index.html       ← Main HTML (all content lives here)
├── style.css        ← All styles (colors, layout, responsive)
├── script.js        ← Interactions (typing, scroll, form)
├── resume.pdf       ← Your CV (add this file!)
└── README.md        ← This file
```

---

## ✅ Quick Customization Checklist

### 1. Add Your Photo
Replace the avatar placeholder with your actual photo:
1. Save your photo as `photo.jpg` in the portfolio folder
2. Open `index.html` and find this block:
   ```html
   <div class="avatar-initials">AH</div>
   ```
3. Replace it with:
   ```html
   <img src="photo.jpg" alt="Abdul Hadi" />
   ```

### 2. Add Your Resume PDF
- Place your `resume.pdf` file in the portfolio folder
- The "Download CV" button is already wired up to it

### 3. Update Your Links
In `index.html`, search for and update:
- `github.com/yourgithub` → your actual GitHub URL
- `linkedin.com/in/yourlinkedin` → your actual LinkedIn URL

### 4. Enable Contact Form (Free — 50 submissions/month)
1. Go to [formspree.io](https://formspree.io) and create a free account
2. Create a new form and copy your endpoint (looks like `https://formspree.io/f/xyzabcde`)
3. Open `script.js` and replace:
   ```js
   const FORMSPREE_URL = 'https://formspree.io/f/YOUR_FORM_ID';
   ```
   with your actual endpoint.

---

## 🌐 Deploy to GitHub Pages (Step-by-Step)

### Option A — GitHub Website (Easiest, no code needed)

1. **Create a GitHub account** at [github.com](https://github.com) if you don't have one

2. **Create a new repository**
   - Click the **+** icon → **New repository**
   - Name it: `portfolio` (or `yourusername.github.io` for a root URL)
   - Set it to **Public**
   - Click **Create repository**

3. **Upload your files**
   - On the repo page, click **Add file** → **Upload files**
   - Drag and drop all files: `index.html`, `style.css`, `script.js`, `resume.pdf`
   - Scroll down, add a commit message like "Initial portfolio upload"
   - Click **Commit changes**

4. **Enable GitHub Pages**
   - Go to your repo → **Settings** tab
   - Scroll down to **Pages** (left sidebar)
   - Under **Source**, select **Deploy from a branch**
   - Branch: `main` | Folder: `/ (root)`
   - Click **Save**

5. **Your site is live!** 🎉
   - Wait 1–2 minutes
   - Visit: `https://yourusername.github.io/portfolio`

---

### Option B — GitHub Desktop App (Recommended if you'll update often)

1. Download [GitHub Desktop](https://desktop.github.com)
2. Sign in with your GitHub account
3. Click **File** → **New Repository** → name it `portfolio`
4. Copy all portfolio files into the folder GitHub Desktop shows you
5. Click **Commit to main** → **Publish repository** (make it Public)
6. Enable GitHub Pages as shown in Step 4 above

**To update your site later:**
- Edit files on your computer
- Open GitHub Desktop → it shows your changes
- Add a commit message → **Commit** → **Push origin**
- Your site updates in ~1 minute!

---

### Option C — VS Code + Git (For developers)

```bash
# 1. Initialize git in your portfolio folder
cd portfolio
git init
git add .
git commit -m "Initial commit"

# 2. Push to GitHub
git remote add origin https://github.com/YOURUSERNAME/portfolio.git
git branch -M main
git push -u origin main

# 3. Enable GitHub Pages in repo Settings → Pages → main branch
```

---

## 🔧 Making Changes

### To update content:
- Open `index.html` in any text editor (Notepad, VS Code, etc.)
- Find the section you want to edit (they're clearly labeled with comments like `<!-- ABOUT -->`)
- Make your changes and save
- Re-upload to GitHub (the site updates automatically)

### To add a project later:
When you're ready to add the Projects section, uncomment this block in `index.html`:
```html
<!-- PROJECTS SECTION — uncomment when ready
<section id="projects" class="section projects">
  ...
</section>
-->
```
(The section is already structured, just hidden until you need it)

### To change colors:
Open `style.css` and edit the CSS variables at the top:
```css
:root {
  --red: #e63030;      /* Main accent color */
  --bg: #0a0a0a;       /* Page background */
  --card: #161616;     /* Card backgrounds */
}
```

---

## 🆓 It's Completely Free!

| Feature | Cost |
|---------|------|
| GitHub Pages hosting | Free forever |
| Custom domain (optional) | ~$12/year |
| Contact form (Formspree) | Free up to 50/month |
| SSL (HTTPS) | Included free |

---

## 💡 Optional: Custom Domain

If you want `www.abdulhadi.com` instead of `yourusername.github.io`:
1. Buy a domain from Namecheap or Google Domains (~$12/year)
2. In GitHub Pages settings, enter your custom domain
3. Add a `CNAME` file to your repo with your domain name
4. Point your domain's DNS to GitHub's servers (instructions in GitHub docs)

---

*Built with ❤️ — HTML, CSS, Vanilla JS. No frameworks, no dependencies, easy to maintain.*
