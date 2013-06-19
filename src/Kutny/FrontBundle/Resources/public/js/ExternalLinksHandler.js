(function(Kutny) {

    /**
     * @constructor
     */
    Kutny.ExternalLinksHandler = function(secondLevelDomain) {
        this._secondLevelDomain = secondLevelDomain;
    };

    Kutny.ExternalLinksHandler.prototype = {

        markExternalLinksWithTargetBlank: function() {
            var odkazy = document.getElementsByTagName('a');

            // external links open in new tab
            for (var i = 0; i < odkazy.length; i++) {
                /*
                 pro odkazy jenž:
                 1) obsahují 'http://'
                 2) neosahují adresu aktuálního webu
                 3) nemají v hrefu 'mailto'
                 4) mají href
                 5) nemají definovanou class
                 */

                // odkazy, které vedou pryč z aktuálního webu
                if (
                    odkazy[i].href.match(/https?:\/\//) &&
                        odkazy[i].href.indexOf(this._secondLevelDomain + '.') == -1 &&
                        odkazy[i].href.indexOf('mailto:') == -1 &&
                        odkazy[i].href.indexOf('callto:') == -1 &&
                        odkazy[i].href && !odkazy[i].className
                    ) {
                    odkazy[i].target = '_blank';
                    odkazy[i].className = 'ext';
                }

                if (odkazy[i].href.match(/https?:\/\//) && odkazy[i].href.indexOf(window.location.hostname) == -1 ) {
                    odkazy[i].target = '_blank';
                }

                //nevim proc, ale u skype:espinoza.v10/?call to odstranuje ':' tak ji tam doplnim napevno
                if(odkazy[i].href.indexOf('?call') != -1) {
                    var oldHref = odkazy[i].href;
                    var noHTTP = oldHref.substr(7, oldHref.length - 1);
                    var toSkype = noHTTP.substr(5,noHTTP.length -1);
                    odkazy[i].href = 'skype:' + toSkype;
                }

                // odkazy, které nevedou pryč z aktuálního webu ale chceme, aby se otvíraly do nového okna/tabu
                else if (odkazy[i].className == 'ext') {
                    odkazy[i].target = '_blank';
                }
            }
        }

    };

}) (Kutny);
