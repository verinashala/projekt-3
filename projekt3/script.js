 function toggleContent(id) {
            const content = document.getElementById(id);
            const isActive = content.classList.contains('active');
            
            document.querySelectorAll('.content').forEach(item => {
                item.classList.remove('active');
            });
            
            
            if (!isActive) {
                content.classList.add('active');
            }
        }