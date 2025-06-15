title: 'Basics of Next.js'
date: '2023-01-02'
Pages and Layouts
The pages directory in Next.js is special.
Files inside it directly correspond to web page paths (URLs).
 * pages/index.js corresponds to /.
 * pages/about.js corresponds to /about.
Dynamic Routing
By wrapping a filename in square brackets, like [param].js, you can create dynamic URLs.
This wiki uses pages/wiki/[slug].js.
This allows displaying individual article pages with URLs like /wiki/first-post and /wiki/second-post.
