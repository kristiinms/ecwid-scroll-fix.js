<script>
// Salvestame scrolli positsiooni enne lehevahetust
window.addEventListener('beforeunload', function() {
    sessionStorage.setItem('scrollPosition', window.scrollY);
});

// Taastame scrolli positsiooni, kui naased lehele
window.addEventListener('load', function() {
    const scrollPos = sessionStorage.getItem('scrollPosition');
    if (scrollPos) {
        window.scrollTo(0, scrollPos);
        sessionStorage.removeItem('scrollPosition'); // eemaldame salvestatud positsiooni, et vältida korduvat laadimist
    }
});
</script>
