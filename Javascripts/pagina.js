

document.addEventListener('DOMContentLoaded', function() {
    // Remove a classe 'active' de todas as seções
    function clearActiveSections() {
        document.querySelectorAll('section').forEach(section => {
            section.classList.remove('active');
        });
    }
    
    // Adiciona a classe 'active' à seção alvo
    function highlightTarget() {
        clearActiveSections();
        const targetId = window.location.hash.substring(1);
        if (targetId) {
            const targetSection = document.getElementById(targetId);
            if (targetSection) {
                targetSection.classList.add('active');
                
                // Remove a classe após 3 segundos
                setTimeout(() => {
                    targetSection.classList.remove('active');
                }, 3000);
            }
        }
    }
    
    // Executa quando a página carrega ou quando o hash muda
    highlightTarget();
    window.addEventListener('hashchange', highlightTarget);
});


