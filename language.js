class SpeciealHeader extends HTMLElement {

    connectedCallback() {
        this.innerHTML = `
        <header>
        <h1>Not on Print.com</h1> 
        <div id=eng_h style="display:block" class="headermenu">
            <div class="headerbutton">
            <button class="dropbtn" onclick="window.location.href = '/index.html';">⌂</button>
            </div> 
            
            <div class="dropdown">
            <button class="dropbtn" onclick="window.location.href = '/text.html';">Text</button>
                <div class="dropdown-content">
                    <a href="/Text/TheReadStream.html">The Red Stream</a>
                    <a href="/Text/MarryMesser.html">Marry Messer</a>
                    <a href="/Text/Shortstories.html">Shortstories</a>
                    <a href="/Text/Diary.html">Diary</a>
                    <a href="/Text/Reviews.html">Reviews</a>
                    <a href="/Text/Places.html">Places</a>
                </div>
            </div> 

            <div class="headerbutton">
                <button class="dropbtn" onclick="window.location.href = '/Audio.html';">Audio</button>
            </div> 

            <div class="headerbutton">
                <button class="dropbtn" onclick="window.location.href = '/About.html';">About</button>
            </div> 

            <div class="headerbutton">
                <button class="dropbtn" onclick="window.location.href = '/NewestUpload.html';">Latest Texts</button>
                </div> 

            <div class="dropdown">
                <button class="dropbtn">Links</button>
                <div class="dropdown-content">
                    <a href="https://www.instagram.com/notonprintdotcom?utm_source=qr&igsh=dmh1dXFlYnYzdDFt">Insta</a>
                    <a href="https://letterboxd.com/kalovedessa/">Letterboxd</a>
                    <a href="mailto:notonprintcontact@gmail.com">Email</a>
                    <a href="https://mastodon.social/@Notonprint">Mastodon</a>
                </div>
            </div>

            <div class="headerbutton">
            <button class="dropbtn" onclick="changeLanguage();">&#127466;&#127475;</button>
            </div> 

        </div>
        
        <div id="ger_h" class="headermenu" style="display:none">
            <div class="headerbutton">
            <button class="dropbtn" onclick="window.location.href = '/index.html';">⌂</button>
            </div> 
            
            <div class="dropdown">
            <button class="dropbtn" onclick="window.location.href = '/text.html';">Text</button>
                <div class="dropdown-content">
                    <a href="/Text/TheReadStream.html">The Red Stream</a>
                    <a href="/Text/MarryMesser.html">Marry Messer</a>
                    <a href="/Text/Shortstories.html">Kurzgeschichten</a>
                    <a href="/Text/Diary.html">Tagebuch</a>
                    <a href="/Text/Reviews.html">Kritiken</a>
                    <a href="/Text/Places.html">Places</a>
                </div>
            </div> 

            <div class="headerbutton">
                <button class="dropbtn" onclick="window.location.href = '/Audio.html';">Audio</button>
            </div> 

            <div class="headerbutton">
                <button class="dropbtn" onclick="window.location.href = '/About.html';">Über</button>
            </div> 

            <div class="headerbutton">
                <button class="dropbtn" onclick="window.location.href = '/NewestUpload.html';">Neuste Texte</button>
                </div> 

            <div class="dropdown">
                <button class="dropbtn">Links</button>
                <div class="dropdown-content">
                    <a href="https://www.instagram.com/notonprintdotcom?utm_source=qr&igsh=dmh1dXFlYnYzdDFt" target="_blank">Insta</a>
                    <a href="https://letterboxd.com/kalovedessa/" target="_blank">Letterboxd</a>
                    <a href="mailto:notonprintcontact@gmail.com" target="_blank">Email</a>
                    <a href="https://mastodon.social/@Notonprint" target="_blank">Mastodon</a>
                </div>
            </div>

            <div class="headerbutton">
            <button class="dropbtn" onclick="changeLanguage();">&#127465;&#127466</button>
            </div>

        </div>





        </header>
        `
    }
}


class SpecialFooter extends HTMLElement {

    connectedCallback() {
        this.innerHTML = `
        <footer>
            <div class="headermenu">
                <div class="footerbutton">
                <p>2025 NotOnPrint.com</p>
                </div>         
                <div class="footerbutton">
                <p id="ger_f" style="display:none"><a href="/Datenschutzerklärung.html">Datenschutzerkärung</a></p>
                <p id="eng_f" style="display:block"><a href="/Datenschutzerklärung.html">Privacy Policy</a></p>
                </div>

            </div>
        </footer>
        `
    }

}

customElements.define(`special-footer`, SpecialFooter);

customElements.define(`special-header`, SpeciealHeader); checkLanguage()


// Source - https://stackoverflow.com/a/16206342
// Posted by Ian, modified by community. See post 'Timeline' for change history
// Retrieved 2026-09-30, License - CC BY-SA 4.0

if (localStorage.getItem("langKey") === null) {
    var lang = 'ger';
} else {
    var lang = localStorage.getItem("langKey");
}




function storeLanguage() {
    localStorage.setItem("langKey", lang);
}

function changeLanguage() {
    if (lang == 'eng') {
        lang = 'ger'
    }
    else if (lang == 'ger') {
        lang = 'eng'
    }
    storeLanguage();
    checkLanguage();
}

function checkLanguage() {
    if (lang == 'eng') {
        document.getElementById('eng_f').style.display = 'block'
        document.getElementById('ger_f').style.display = 'none'
        document.getElementById('eng_h').style.display = 'block'
        document.getElementById('ger_h').style.display = 'none'
        document.getElementById('eng').style.display = 'block'
        document.getElementById('ger').style.display = 'none'
    }

    else if (lang == 'ger') {
        document.getElementById('ger_f').style.display = 'block'
        document.getElementById('eng_f').style.display = 'none'
        document.getElementById('ger').style.display = 'block'
        document.getElementById('eng').style.display = 'none'
        document.getElementById('eng_h').style.display = 'none'
        document.getElementById('ger_h').style.display = 'block'
    }
}


checkLanguage();