jQuery(document).ready(function() {
	// Necessário para mostrar o tooltip na cor preta
	$('[data-toggle = "tooltip"]').tooltip();
});

// Faz uma mensagem de alert desaparecer depois de um determinado tempo. 
// Ao fechar automaticamente o alert, faz isso com efeito fade
var tempo = 5000; // tempo em milésimos

setTimeout(function() {
	$('.teste-auto-closable-alert').fadeOut(); // Faz o alert ir desaparecendo com fade
}, tempo);