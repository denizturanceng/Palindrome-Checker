function PalindromeKontrolu() {
	var kontrolButonu = document.getElementById('kontrolButonu');
	var sonuc = document.getElementById('sonuc');
	kontrolButonu.addEventListener('click', () => {
		var alinanKelime = document.getElementById('alinanDeger').value;
		var kontrol = alinanKelime.split('').reverse().join('');
		if (kontrol == alinanKelime) {
			sonuc.innerHTML = "Palindrome";
		} else {
			sonuc.innerHTML = "Palindrome değil.";
		}
	})
}
PalindromeKontrolu();