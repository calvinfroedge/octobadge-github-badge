# OctoBadge - Unofficial Github Badge

*"When it comes to hiring, I'll take a Github commit log over a resume any day." - John Resig, Creator of jQuery*

Display a Cool Badge that Shows off Your Github Project Contributions! You can put this on your website, such as on your blog, to display some things about your Github profile:

- Name
- Location
- Number of followers
- Number of repos
- Number of stars
- Number of gists
- Popular repositories and the number of stars
- Languages you've written code in (by number of repos)

It comes in two flavors...


### Octo

![octo](https://raw.githubusercontent.com/calvinfroedge/octobadge-github-badge/master/example_octo.png)

```
<github-badge user="username_here" badge="octo"></github-badge>
```

### Octogeek

![octogeek](https://raw.githubusercontent.com/calvinfroedge/octobadge-github-badge/master/example_octogeek.png)

```
<github-badge user="username_here" badge="octogeek"></github-badge>
```

## Installing

Just include the JS file before the closing `</body>` tag  (you can get a minified version in dist, or use the unminified version), include the CSS in the `<head>` section, and then use the badge HTML:

```
<github-badge user="username_here" badge="octogeek"></github-badge>
```

## Considerations

The badge requires loading data from the Github API. It uses the browsing user's public API Github ratelimit, which is 60 requests per hour. The badge makes API requests for the following:

- User profile data (name, # of followers, etc.)
- Repo data (Needed to see how many stars a user has received)
- Events data (for contribution graph).

For most users, there will be 3 API requests needed to load all data, but some users with many contributions and repositories may require more to load all the data.

To make sure users don't quickly use this up, the badge will cache the results of API requests for 1 day. To improve the badge, I think should be a service that you OAuth with which will cache your data from Github's API and allow it to be served from one request. This will avoid unnecessary requests and rate limits. If there is a lot of interest in this project, that will be my next step.

## What needs to be done?

Testing! I've only tested in Chrome so far. Automated functional tests would be nice. I don't think this project is a good candidate for unit testing (convince me otherwise?).

It would also be cool to have other badges, so if you have a design idea, please reach out to me so I can see about getting it implemented.

## Developing

I intentionally used vanilla JavaScript and CSS to make it simple for others to contribute. The build is just for minification. To run that, just run `npm install` and then run `gulp`. You should have node >= 0.10

## Future development

If you want to get involved, feel free to create an issue. We may set up an IRC or Slack channel.

Here are some future ideas:

- Allow for hiring inquiries from the badge
- Allow users to follow directly from badge (if they are logged into Github)
- Display private contribution data as well as public contribution data in badge
