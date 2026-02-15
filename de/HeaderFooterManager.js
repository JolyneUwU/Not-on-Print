class SpeciealHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <header>
        <h1>Not on Print.com</h1> 
        <div class="headermenu">
            <div class="headerbutton">
            <button class="dropbtn" onclick="window.location.href = '/de/index.html';">⌂</button>
            </div> 
            
            <div class="dropdown">
            <button class="dropbtn" onclick="window.location.href = '/de/text.html';">Text</button>
                <div class="dropdown-content">
                    <a href="/Text/TheReadStream.html">The Red Stream</a>
                    <a href="/de/Text/MarryMesser.html">Marry Messer</a>
                    <a href="/de/Text/Shortstories.html">Kurzgeschichten</a>
                    <a href="/de/Text/Diary.html">Tagebuch</a>
                    <a href="/de/Text/Reviews.html">Kritiken</a>
                    <a href="/de/Text/Places.html">Places</a>
                </div>
            </div> 

            <div class="headerbutton">
                <button class="dropbtn" onclick="window.location.href = '/de/Audio.html';">Audio</button>
            </div> 

            <div class="headerbutton">
                <button class="dropbtn" onclick="window.location.href = '/de/About.html';">Über</button>
            </div> 

            <div class="headerbutton">
                <button class="dropbtn" onclick="window.location.href = '/de/NewestUpload.html';">Neuste Texte</button>
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
            <button class="dropbtn" onclick="window.location.href = '/index.html';">&#127466;&#127475;</button>
            </div>

        </div>
    </header>
        `
    }
}

customElements.define(`special-header`, SpeciealHeader)
