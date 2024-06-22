export const openUrl = (url, target = "_self") => {
    const newWindow = window.open(url, target, 'noopener,noreferrer')
    if (newWindow) newWindow.opener = null
}