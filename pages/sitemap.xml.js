import React from "react";
import fs from "fs";
import client from "../apollo-client";
import siteMapAllBlogData from "../_queries/siteMapAllBlogData";

const Sitemap = () => {};

export async function getServerSideProps({res}) {
    const baseUrl = {
        development: "https://healthinmonde.com",
        production: "https://healthinmonde.com",
    }[process.env.NODE_ENV];

    const staticPages = fs.readdirSync("pages")
        .filter((staticPage) => {
            return ![
                "_app.js",
                "_document.js",
                "_error.js",
                "category",
                "post",
                "sitemap.xml.js",
            ].includes(staticPage);
        })
        .map((staticPagePath) => {
            return `${baseUrl}/${staticPagePath.replace('.js', '')}`;
        });
    const {data} = await client.query({
        query: siteMapAllBlogData
    });
    const postPages = data?.posts.nodes.map( post => {
        return `${baseUrl}/blog/${post.slug}`
    })
    const categoryPages = data?.categories.nodes.map( post => {
        return `${baseUrl}/category/${post.slug}`
    })

    const allPaths = [...staticPages, ...postPages,...categoryPages];
    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${
        allPaths.map((url) => {
                return `
                  <url>
                    <loc>${url}</loc>
                    <lastmod>${new Date().toISOString()}</lastmod>
                    <changefreq>monthly</changefreq>
                    <priority>1.0</priority>
                  </url>
                `;
            }).join("")        
        }
    </urlset>
  `;

    res.setHeader("Content-Type", "text/xml");
    res.write(sitemap);
    res.end();

    return {
        props: {},
    };
};

export default Sitemap;
