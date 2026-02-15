class SpeciealHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <header>
        <h1>Not on Print.com</h1> 
        <div class="headermenu">
            <div class="headerbutton">
            <button class="dropbtn" onclick="window.location.href = '/index.html';">⌂</button>
            </div> 
            
            <div class="dropdown">
            <button class="dropbtn" onclick="window.location.href = '/text.html';">Text</button>
                <div class="dropdown-content">
                    <a href="/Text/TheReadStream.html">The Red Stream</a>
                    <a href="/de/Text/MarryMesser.html">Marry Messer</a>
                    <a href="/Text/Shortstories.html">Shortstories</a>
                    <a href="/Text/Diary.html">Diary</a>
                    <a href="/Text/Reviews.html">Reviews</a>
                    <a href="/de/Text/Places.html">Places</a>
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
            <button class="dropbtn" onclick="window.location.href = '/de/index.html';">&#127465;&#127466;</button>
            </div> 

        </div>
        </header>
        `
    }
}

customElements.define(`special-header`, SpeciealHeader)
