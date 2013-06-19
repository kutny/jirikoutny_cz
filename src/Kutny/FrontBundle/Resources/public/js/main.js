var Kutny = {};

function init() {
    var externalLinkHandler = new Kutny.ExternalLinksHandler('jirikoutny');
    externalLinkHandler.markExternalLinksWithTargetBlank();
}

$(document).ready(init);