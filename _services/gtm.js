export const GTM_ID = "GTM-57F65R8"
export const pageview = (url) => {
    window.dataLayer.push({
        event: 'pageview',
        page: url,
    })
}