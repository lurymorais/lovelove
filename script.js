(function() {
    "use strict";

    // ===== TRADUÇÕES =====
    const TRADUCOES = {
        'pt': { texto: 'Me dá uma chance?', sim: 'SIM', nao: 'NÃO', nome: 'Português (Brasil)', tituloPagina: 'Me dá uma chance?', descricao: 'Uma página para os românticos.', palavrasChave: 'romântico, interativo, desafio, emojis, divertido, amor' },
        'en': { texto: 'Give me a chance?', sim: 'YES', nao: 'NO', nome: 'English', tituloPagina: 'Give me a chance?', descricao: 'A page for romantics.', palavrasChave: 'romantic, interactive, challenge, emojis, fun, love' },
        'es': { texto: '¿Me das una oportunidad?', sim: 'SÍ', nao: 'NO', nome: 'Español', tituloPagina: '¿Me das una oportunidad?', descricao: 'Una página para los románticos.', palavrasChave: 'romántico, interactivo, desafío, emojis, divertido, amor' },
        'fr': { texto: 'Donne-moi une chance ?', sim: 'OUI', nao: 'NON', nome: 'Français', tituloPagina: 'Donne-moi une chance ?', descricao: 'Une page pour les romantiques.', palavrasChave: 'romantique, interactif, défi, emojis, amusant, amour' },
        'it': { texto: 'Mi dai una possibilità?', sim: 'SÌ', nao: 'NO', nome: 'Italiano', tituloPagina: 'Mi dai una possibilità?', descricao: 'Una pagina per i romantici.', palavrasChave: 'romantico, interattivo, sfida, emojis, divertente, amore' },
        'ro': { texto: 'Îmi dai o șansă?', sim: 'DA', nao: 'NU', nome: 'Română', tituloPagina: 'Îmi dai o șansă?', descricao: 'O pagină pentru romantici.', palavrasChave: 'romantic, interactiv, provocare, emoji, distractiv, iubire' },
        'de': { texto: 'Gibst du mir eine Chance?', sim: 'JA', nao: 'NEIN', nome: 'Deutsch', tituloPagina: 'Gibst du mir eine Chance?', descricao: 'Eine Seite für Romantiker.', palavrasChave: 'romantisch, interaktiv, Herausforderung, Emojis, Spaß, Liebe' },
        'nl': { texto: 'Geef je me een kans?', sim: 'JA', nao: 'NEE', nome: 'Nederlands', tituloPagina: 'Geef je me een kans?', descricao: 'Een pagina voor romantici.', palavrasChave: 'romantisch, interactief, uitdaging, emojis, leuk, liefde' },
        'ru': { texto: 'Дашь мне шанс?', sim: 'ДА', nao: 'НЕТ', nome: 'Русский', tituloPagina: 'Дашь мне шанс?', descricao: 'Страница для романтиков.', palavrasChave: 'романтический, интерактивный, вызов, эмодзи, весело, любовь' },
        'uk': { texto: 'Даси мені шанс?', sim: 'ТАК', nao: 'НІ', nome: 'Українська', tituloPagina: 'Даси мені шанс?', descricao: 'Сторінка для романтиків.', palavrasChave: 'романтичний, інтерактивний, виклик, емодзі, весело, кохання' },
        'pl': { texto: 'Dasz mi szansę?', sim: 'TAK', nao: 'NIE', nome: 'Polski', tituloPagina: 'Dasz mi szansę?', descricao: 'Strona dla romantyków.', palavrasChave: 'romantyczny, interaktywny, wyzwanie, emoji, zabawa, miłość' },
        'cs': { texto: 'Dáš mi šanci?', sim: 'ANO', nao: 'NE', nome: 'Čeština', tituloPagina: 'Dáš mi šanci?', descricao: 'Stránka pro romantiky.', palavrasChave: 'romantický, interaktivní, výzva, emodži, zábava, láska' },
        'bg': { texto: 'Ще ми дадеш ли шанс?', sim: 'ДА', nao: 'НЕ', nome: 'Български', tituloPagina: 'Ще ми дадеш ли шанс?', descricao: 'Страница за романтици.', palavrasChave: 'романтичен, интерактивен, предизвикателство, емоджи, забавно, любов' },
        'hr': { texto: 'Daš mi šansu?', sim: 'DA', nao: 'NE', nome: 'Hrvatski', tituloPagina: 'Daš mi šansu?', descricao: 'Stranica za romantike.', palavrasChave: 'romantičan, interaktivan, izazov, emojiji, zabavno, ljubav' },
        'el': { texto: 'Μου δίνεις μια ευκαιρία;', sim: 'ΝΑΙ', nao: 'ΟΧΙ', nome: 'Ελληνικά', tituloPagina: 'Μου δίνεις μια ευκαιρία;', descricao: 'Μια σελίδα για ρομαντικούς.', palavrasChave: 'ρομαντικός, διαδραστικός, πρόκληση, emojis, διασκεδαστικό, αγάπη' },
        'ja': { texto: 'チャンスをくれない？', sim: 'はい', nao: 'いいえ', nome: '日本語', tituloPagina: 'チャンスをくれない？', descricao: 'ロマンティックなページ。', palavrasChave: 'ロマンチック, インタラクティブ, チャレンジ, 絵文字, 楽しい, 愛' },
        'ko': { texto: '나한테 기회를 줄래?', sim: '네', nao: '아니오', nome: '한국어', tituloPagina: '나한테 기회를 줄래?', descricao: '낭만적인 페이지.', palavrasChave: '낭만적인, 인터랙티브, 도전, 이모지, 재미있는, 사랑' },
        'zh-CN': { texto: '给我一个机会好吗？', sim: '好的', nao: '不要', nome: '简体中文', tituloPagina: '给我一个机会好吗？', descricao: '一个浪漫的页面。', palavrasChave: '浪漫, 互动, 挑战, 表情符号, 有趣, 爱' },
        'zh-TW': { texto: '畀個機會我好嗎？', sim: '好', nao: '不要', nome: '繁體中文', tituloPagina: '畀個機會我好嗎？', descricao: '一個浪漫的頁面。', palavrasChave: '浪漫, 互動, 挑戰, 表情符號, 有趣, 愛' },
        'vi': { texto: 'Cho anh/em một cơ hội nhé?', sim: 'CÓ', nao: 'KHÔNG', nome: 'Tiếng Việt', tituloPagina: 'Cho anh/em một cơ hội nhé?', descricao: 'Một trang dành cho người lãng mạn.', palavrasChave: 'lãng mạn, tương tác, thử thách, biểu tượng cảm xúc, vui vẻ, tình yêu' },
        'th': { texto: 'ให้โอกาสฉันหน่อยได้ไหม?', sim: 'ใช่', nao: 'ไม่', nome: 'ไทย', tituloPagina: 'ให้โอกาสฉันหน่อยได้ไหม?', descricao: 'หน้าเว็บสำหรับคนโรแมนติก', palavrasChave: 'โรแมนติก, โต้ตอบ, ท้าทาย, อีโมจิ, สนุก, รัก' },
        'tl': { texto: 'Bigyan mo naman ako ng pagkakataon?', sim: 'OO', nao: 'HINDI', nome: 'Tagalog', tituloPagina: 'Bigyan mo naman ako ng pagkakataon?', descricao: 'Isang pahina para sa mga romantiko.', palavrasChave: 'romantiko, interaktibo, hamon, emojis, masaya, pag-ibig' },
        'hi': { texto: 'क्या मुझे एक मौका दोगे?', sim: 'हाँ', nao: 'नहीं', nome: 'हिन्दी', tituloPagina: 'क्या मुझे एक मौका दोगे?', descricao: 'रोमांटिक लोगों के लिए एक पृष्ठ।', palavrasChave: 'रोमांटिक, इंटरैक्टिव, चुनौती, इमोजी, मज़ा, प्यार' },
        'ar': { texto: 'ممكن تديني فرصة؟', sim: 'نعم', nao: 'لا', nome: 'العربية', tituloPagina: 'ممكن تديني فرصة؟', descricao: 'صفحة للرومانسيين.', palavrasChave: 'رومانسي, تفاعلي, تحدي, رموز تعبيرية, ممتع, حب' },
        'he': { texto: 'תיתן/תתני לי הזדמנות?', sim: 'כן', nao: 'לא', nome: 'עברית', tituloPagina: 'תיתן/תתני לי הזדמנות?', descricao: 'עמוד לרומנטיקנים.', palavrasChave: "רומנטי, אינטראקטיבי, אתגר, אימוג'י, כיף, אהבה" },
        'tr': { texto: 'Bana bir şans verir misin?', sim: 'EVET', nao: 'HAYIR', nome: 'Türkçe', tituloPagina: 'Bana bir şans verir misin?', descricao: 'Romantikler için bir sayfa.', palavrasChave: 'romantik, etkileşimli, meydan okuma, emojiler, eğlenceli, aşk' },
        'fa': { texto: 'یه فرصت بهم میدی؟', sim: 'بله', nao: 'نه', nome: 'فارسی', tituloPagina: 'یه فرصت بهم میدی؟', descricao: 'صفحه‌ای برای رمانتیک‌ها.', palavrasChave: 'رمانتیک, تعاملی, چالش, ایموجی, سرگرم‌کننده, عشق' },
        'sw': { texto: 'Unipe nafasi?', sim: 'NDIYO', nao: 'HAPANA', nome: 'Kiswahili', tituloPagina: 'Unipe nafasi?', descricao: 'Ukurasa kwa wapenzi.', palavrasChave: 'kimapenzi, ingilishi, changamoto, emoji, furaha, upendo' },
        'sv': { texto: 'Ger du mig en chans?', sim: 'JA', nao: 'NEJ', nome: 'Svenska', tituloPagina: 'Ger du mig en chans?', descricao: 'En sida för romantiker.', palavrasChave: 'romantisk, interaktiv, utmaning, emojis, roligt, kärlek' },
        'no': { texto: 'Gir du meg en sjanse?', sim: 'JA', nao: 'NEI', nome: 'Norsk', tituloPagina: 'Gir du meg en sjanse?', descricao: 'En side for romantikere.', palavrasChave: 'romantisk, interaktiv, utfordring, emojier, gøy, kjærlighet' },
        'da': { texto: 'Giver du mig en chance?', sim: 'JA', nao: 'NEJ', nome: 'Dansk', tituloPagina: 'Giver du mig en chance?', descricao: 'En side for romantikere.', palavrasChave: 'romantisk, interaktiv, udfordring, emojier, sjov, kærlighed' },
        'fi': { texto: 'Annatko minulle mahdollisuuden?', sim: 'KYLLÄ', nao: 'EI', nome: 'Suomi', tituloPagina: 'Annatko minulle mahdollisuuden?', descricao: 'Sivu romantikoille.', palavrasChave: 'romanttinen, interaktiivinen, haaste, emojit, hauska, rakkaus' }
    };

    const LANG_MAP = {
        'pt': 'pt', 'pt-BR': 'pt', 'pt-PT': 'pt',
        'en': 'en', 'en-US': 'en', 'en-GB': 'en',
        'es': 'es', 'es-ES': 'es', 'es-MX': 'es',
        'fr': 'fr', 'fr-FR': 'fr', 'fr-CA': 'fr',
        'it': 'it', 'it-IT': 'it',
        'ro': 'ro', 'ro-RO': 'ro',
        'de': 'de', 'de-DE': 'de',
        'nl': 'nl', 'nl-NL': 'nl',
        'ru': 'ru', 'ru-RU': 'ru',
        'uk': 'uk', 'uk-UA': 'uk',
        'pl': 'pl', 'pl-PL': 'pl',
        'cs': 'cs', 'cs-CZ': 'cs',
        'bg': 'bg', 'bg-BG': 'bg',
        'hr': 'hr', 'hr-HR': 'hr',
        'el': 'el', 'el-GR': 'el',
        'ja': 'ja', 'ja-JP': 'ja',
        'ko': 'ko', 'ko-KR': 'ko',
        'zh': 'zh-CN', 'zh-CN': 'zh-CN', 'zh-TW': 'zh-TW',
        'vi': 'vi', 'vi-VN': 'vi',
        'th': 'th', 'th-TH': 'th',
        'tl': 'tl', 'tl-PH': 'tl',
        'hi': 'hi', 'hi-IN': 'hi',
        'ar': 'ar', 'ar-SA': 'ar', 'ar-EG': 'ar',
        'he': 'he', 'he-IL': 'he',
        'tr': 'tr', 'tr-TR': 'tr',
        'fa': 'fa', 'fa-IR': 'fa',
        'sw': 'sw', 'sw-TZ': 'sw',
        'sv': 'sv', 'sv-SE': 'sv',
        'no': 'no', 'no-NO': 'no',
        'da': 'da', 'da-DK': 'da',
        'fi': 'fi', 'fi-FI': 'fi'
    };

    // ===== ELEMENTOS =====
    const titulo = document.getElementById('titulo');
    const btnSim = document.getElementById('btnSim');
    const btnNaoInicial = document.getElementById('btnNaoInicial');
    const emojiContainer = document.getElementById('emojiContainer');
    const muteBtn = document.getElementById('muteBtn');
    const langBtn = document.getElementById('langBtn');
    const langMenu = document.getElementById('langMenu');
    const body = document.body;
    let btnNao = null;
    let primeiraFuga = false;
    let audioContext = null;
    let estaBloqueado = false;
    let overlay = null;
    let isMuted = false;
    let audiosAtivos = [];
    let idiomaAtual = 'pt';
    let langMenuAberto = false;

    // ===== BOTÃO COMPARTILHAR =====
    const shareBtn = document.getElementById('shareBtn');
    const modalOverlay = document.getElementById('modalOverlay');
    const modalFechar = document.getElementById('modalFechar');
    const modalLinkInput = document.getElementById('modalLinkInput');
    const modalBtnCopiar = document.getElementById('modalBtnCopiar');

    function getLinkCompartilhavel() {
        const url = new URL(window.location.href);
        url.searchParams.set('lang', idiomaAtual);
        return url.toString();
    }

    function abrirModal() {
        modalLinkInput.value = getLinkCompartilhavel();
        modalOverlay.classList.add('aberto');
        modalLinkInput.select();
        document.body.style.overflow = 'hidden';
    }

    function fecharModal() {
        modalOverlay.classList.remove('aberto');
        document.body.style.overflow = '';
        modalBtnCopiar.classList.remove('copiado');
    }

    shareBtn.addEventListener('click', abrirModal);
    modalFechar.addEventListener('click', fecharModal);

    modalOverlay.addEventListener('click', function(e) {
        if (e.target === modalOverlay) {
            fecharModal();
        }
    });

    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && modalOverlay.classList.contains('aberto')) {
            fecharModal();
        }
    });

    modalBtnCopiar.addEventListener('click', function() {
        const link = modalLinkInput.value;
        if (navigator.clipboard && navigator.clipboard.writeText) {
            navigator.clipboard.writeText(link).then(() => {
                modalBtnCopiar.classList.add('copiado');
                setTimeout(() => {
                    modalBtnCopiar.classList.remove('copiado');
                }, 2500);
            }).catch(() => {
                modalLinkInput.select();
                document.execCommand('copy');
                modalBtnCopiar.classList.add('copiado');
                setTimeout(() => {
                    modalBtnCopiar.classList.remove('copiado');
                }, 2500);
            });
        } else {
            modalLinkInput.select();
            document.execCommand('copy');
            modalBtnCopiar.classList.add('copiado');
            setTimeout(() => {
                modalBtnCopiar.classList.remove('copiado');
            }, 2500);
        }
    });

    // ===== BOTÃO NÃO =====
    function criarBotaoNao(comAnimacao) {
        // Remove o botão inicial se ele ainda existir
        if (btnNaoInicial && btnNaoInicial.parentNode) {
            btnNaoInicial.remove();
            // Marca que a fuga já foi ativada
            primeiraFuga = true;
        }
        
        // Remove o botão existente
        if (btnNao) {
            btnNao.remove();
            btnNao = null;
        }
    
        const novoBtn = document.createElement('button');
        novoBtn.className = 'btn-nao';
        if (comAnimacao === false) {
            novoBtn.classList.add('sem-animacao');
        }
        novoBtn.textContent = traducaoAtual ? traducaoAtual.nao : 'NÃO';
        novoBtn.setAttribute('tabindex', '-1');
        novoBtn.style.zIndex = '9999';
    
        posicionarBotao(novoBtn);
    
        novoBtn.addEventListener('mouseenter', function(e) {
            criarBotaoNao(false);
        });
    
        novoBtn.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            if (!estaBloqueado) criarBotaoNao(false);
        });
    
        novoBtn.addEventListener('mousedown', function(e) {
            e.preventDefault();
            if (!estaBloqueado) criarBotaoNao(false);
        });
    
        document.body.appendChild(novoBtn);
        btnNao = novoBtn;
    }

    function ativarFuga() {
        if (primeiraFuga) return;
        primeiraFuga = true;
        if (btnNaoInicial) {
            btnNaoInicial.remove();
        }
        criarBotaoNao(true);
    }

    btnNaoInicial.addEventListener('click', function(e) {
        e.preventDefault();
        e.stopPropagation();
        ativarFuga();
    });

    btnNaoInicial.addEventListener('mouseenter', function(e) {
        ativarFuga();
    });

    // ===== LISTAS DE EMOJIS =====
    const emojis = ['😍','😘','🥰','😏','😈','👻','😻','😽','🙏','🎉','🍆','🍑','🌹','🌚','💞','💘','💖'];
    const emojisEspeciais = {
        '🫦': { duracao: 3000, tema: 'beijo' },
        '❤️‍🔥': { duracao: 3000, tema: 'fogo' }
    };
    const CHANCE_RARO = 0.06;

    const AUDIOS_PRE_CARREGAR = [
        'https://revistacarnaubais.com.br/imgs/assets/fogo.mp3',
        'https://revistacarnaubais.com.br/imgs/assets/beijo.mp3',
        'https://revistacarnaubais.com.br/imgs/assets/riso.mp3'
    ];

    function preCarregarAudios() {
        AUDIOS_PRE_CARREGAR.forEach(url => {
            const audio = new Audio();
            audio.preload = 'auto';
            audio.src = url;
            audio.load();
        });
    }

    // ===== FUNÇÃO PARA EXTRAIR PARÂMETRO DA URL =====
    function getIdiomaDaURL() {
        try {
            const urlParams = new URLSearchParams(window.location.search);
            const langParam = urlParams.get('lang');
            if (langParam) {
                const paramMap = {
                    'pt': 'pt', 'pt_BR': 'pt', 'pt-PT': 'pt',
                    'en': 'en', 'en_US': 'en', 'en_GB': 'en',
                    'es': 'es', 'es_ES': 'es',
                    'fr': 'fr', 'fr_FR': 'fr',
                    'it': 'it', 'it_IT': 'it',
                    'de': 'de', 'de_DE': 'de',
                    'ja': 'ja', 'ja_JP': 'ja',
                    'ko': 'ko', 'ko_KR': 'ko',
                    'zh': 'zh-CN', 'zh_CN': 'zh-CN', 'zh_TW': 'zh-TW',
                    'ru': 'ru', 'ru_RU': 'ru',
                    'ar': 'ar', 'ar_SA': 'ar',
                    'hi': 'hi', 'hi_IN': 'hi',
                    'tr': 'tr', 'tr_TR': 'tr',
                    'vi': 'vi', 'vi_VN': 'vi',
                    'th': 'th', 'th_TH': 'th',
                    'pl': 'pl', 'pl_PL': 'pl',
                    'nl': 'nl', 'nl_NL': 'nl',
                    'sv': 'sv', 'sv_SE': 'sv',
                    'no': 'no', 'no_NO': 'no',
                    'da': 'da', 'da_DK': 'da',
                    'fi': 'fi', 'fi_FI': 'fi',
                    'el': 'el', 'el_GR': 'el',
                    'he': 'he', 'he_IL': 'he',
                    'fa': 'fa', 'fa_IR': 'fa',
                    'uk': 'uk', 'uk_UA': 'uk',
                    'ro': 'ro', 'ro_RO': 'ro',
                    'bg': 'bg', 'bg_BG': 'bg',
                    'cs': 'cs', 'cs_CZ': 'cs',
                    'hr': 'hr', 'hr_HR': 'hr',
                    'tl': 'tl', 'tl_PH': 'tl',
                    'sw': 'sw', 'sw_TZ': 'sw'
                };
                const codigo = paramMap[langParam] || paramMap[langParam.replace('_', '-')] || null;
                if (codigo && TRADUCOES[codigo]) {
                    return codigo;
                }
            }
        } catch (e) {}
        return null;
    }

    // ===== FUNÇÕES DE IDIOMA =====
    function detectarIdioma() {
        const lang = navigator.language || navigator.languages?.[0] || 'pt';
        return LANG_MAP[lang] || 'pt';
    }

    let traducaoAtual = TRADUCOES['pt'];

    function aplicarIdioma(codigo) {
        idiomaAtual = codigo;
        const traducao = TRADUCOES[codigo];
        if (traducao) {
            // Atualiza o título da página
            document.title = traducao.tituloPagina || traducao.texto;
            
            // Atualiza meta tags SEO
            const metaDescription = document.querySelector('meta[name="description"]');
            const metaKeywords = document.querySelector('meta[name="keywords"]');
            const ogTitle = document.querySelector('meta[property="og:title"]');
            const ogDescription = document.querySelector('meta[property="og:description"]');
            const twitterTitle = document.querySelector('meta[name="twitter:title"]');
            const twitterDescription = document.querySelector('meta[name="twitter:description"]');
            
            if (metaDescription) metaDescription.content = traducao.descricao || traducao.texto;
            if (metaKeywords) metaKeywords.content = traducao.palavrasChave || '';
            if (ogTitle) ogTitle.content = traducao.tituloPagina || traducao.texto;
            if (ogDescription) ogDescription.content = traducao.descricao || traducao.texto;
            if (twitterTitle) twitterTitle.content = traducao.tituloPagina || traducao.texto;
            if (twitterDescription) twitterDescription.content = traducao.descricao || traducao.texto;
            
            // Atualiza o HTML lang
            document.documentElement.lang = codigo;
            
            titulo.innerHTML = `<span>${traducao.texto}</span>`;
            btnSim.textContent = `${traducao.sim}`;
            if (btnNaoInicial && !primeiraFuga) {
                btnNaoInicial.textContent = traducao.nao;
            }
            if (btnNao) {
                btnNao.textContent = traducao.nao;
            }
            traducaoAtual = traducao;
        }
        atualizarMenu(codigo);
        try {
            localStorage.setItem('idioma_preferido', codigo);
            const url = new URL(window.location);
            url.searchParams.set('lang', codigo);
            window.history.replaceState({}, '', url);
        } catch (e) {}
    }

    function atualizarMenu(codigoAtivo) {
        const items = Object.keys(TRADUCOES).map(cod => {
            const t = TRADUCOES[cod];
            const ativo = cod === codigoAtivo ? 'ativo' : '';
            return `<button class="lang-item ${ativo}" data-lang="${cod}">${t.nome}</button>`;
        }).join('');
        langMenu.innerHTML = items;

        langMenu.querySelectorAll('.lang-item').forEach(item => {
            item.addEventListener('click', function() {
                const lang = this.dataset.lang;
                aplicarIdioma(lang);
                fecharMenu();
            });
        });
    }

    function toggleMenu() {
        langMenuAberto = !langMenuAberto;
        langMenu.classList.toggle('aberto', langMenuAberto);
    }

    function fecharMenu() {
        langMenuAberto = false;
        langMenu.classList.remove('aberto');
    }

    langBtn.addEventListener('click', function(e) {
        e.stopPropagation();
        toggleMenu();
    });

    document.addEventListener('click', function(e) {
        if (langMenuAberto && !langMenu.contains(e.target) && e.target !== langBtn) {
            fecharMenu();
        }
    });

    // ===== CONTROLE DE MUTE =====
    function toggleMute() {
        isMuted = !isMuted;
        muteBtn.classList.toggle('muted', isMuted);

        if (isMuted) {
            muteBtn.innerHTML = `
                <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                    <g>
                        <path d="M218.911,11.516L108.499,121.928H0v268.144h108.499l110.412,110.412h49.233V11.516H218.911z M220.824,435.477
                            l-92.726-92.726H47.32V169.246h80.779l92.726-92.724V435.477z"/>
                    </g>
                    <g>
                        <polygon points="512,194.657 478.54,161.197 417.197,222.54 355.852,161.197 322.394,194.657 383.737,256 322.394,317.343 
                            355.852,350.803 417.197,289.46 478.54,350.803 512,317.343 450.655,256"/>
                    </g>
                </svg>
            `;
        } else {
            muteBtn.innerHTML = `
                <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                    <g>
                        <path d="M281.817,0L166.206,115.613H52.595v280.774h113.61L281.817,512h51.552V0H281.817z M283.82,443.932l-97.093-97.093h-84.584
                            V165.161h84.584l97.093-97.093V443.932z"/>
                    </g>
                    <g>
                        <path d="M408.694,133.374l-35.036,35.036c48.297,48.298,48.297,126.884,0,175.18l35.036,35.036
                            C476.309,311.01,476.309,200.99,408.694,133.374z"/>
                    </g>
                </svg>
            `;
        }

        audiosAtivos.forEach(audio => {
            if (isMuted) {
                audio.pause();
            } else {
                audio.play().catch(() => {});
            }
        });
    }

    muteBtn.addEventListener('click', toggleMute);

    // ===== FUNÇÕES DE ÁUDIO =====
    function criarAudio(url, currentTime = 0) {
        const audio = new Audio(url);
        if (currentTime > 0) {
            audio.currentTime = currentTime;
        }
        audio.muted = isMuted;
        audiosAtivos.push(audio);
        return audio;
    }

    function limparAudios() {
        audiosAtivos.forEach(audio => {
            audio.pause();
            audio.currentTime = 0;
        });
        audiosAtivos = [];
    }

    function tocarAudiosFogo() {
        try {
            if (!audioContext) {
                audioContext = new (window.AudioContext || window.webkitAudioContext)();
            }
            limparAudios();
            const audio1 = criarAudio('https://revistacarnaubais.com.br/imgs/assets/fogo.mp3', 1);
            if (!isMuted) {
                audio1.play().catch(() => {});
            }
            setTimeout(() => {
                audio1.pause();
                audio1.currentTime = 0;
                audiosAtivos = audiosAtivos.filter(a => a !== audio1);
            }, 3200);
        } catch (e) {}
    }

    function tocarAudiosBeijo() {
        try {
            if (!audioContext) {
                audioContext = new (window.AudioContext || window.webkitAudioContext)();
            }
            limparAudios();
            const audio1 = criarAudio('https://revistacarnaubais.com.br/imgs/assets/beijo.mp3');
            const audio2 = criarAudio('https://revistacarnaubais.com.br/imgs/assets/riso.mp3');
            if (!isMuted) {
                audio1.play().catch(() => {});
                audio1.addEventListener('ended', function() {
                    if (!isMuted) {
                        audio2.play().catch(() => {});
                    }
                });
            }
            setTimeout(() => {
                audio1.pause();
                audio1.currentTime = 0;
                audio2.pause();
                audio2.currentTime = 0;
                audiosAtivos = audiosAtivos.filter(a => a !== audio1 && a !== audio2);
            }, 3200);
        } catch (e) {}
    }

    // ===== FUNÇÕES DE TEMA =====
    function criarOverlay() {
        if (!overlay) {
            overlay = document.createElement('div');
            overlay.className = 'blocking-overlay';
            document.body.appendChild(overlay);
        }
        overlay.style.display = 'block';
        estaBloqueado = true;
        body.classList.add('cursor-invisivel');
    }

    function removerOverlay() {
        if (overlay) {
            overlay.style.display = 'none';
        }
        estaBloqueado = false;
        body.classList.remove('cursor-invisivel');
        body.classList.remove('tema-fogo', 'tema-beijo');
    }

    function aplicarTema(tema) {
        body.classList.remove('tema-fogo', 'tema-beijo');
        if (tema === 'fogo') {
            body.classList.add('tema-fogo');
        } else if (tema === 'beijo') {
            body.classList.add('tema-beijo');
        }
    }

    function efeitoFogo() {
        aplicarTema('fogo');
        tocarAudiosFogo();
        const fireEmojis = ['🔥', '🔥', '🔥', '🔥', '🔥', '🔥', '🔥'];
        for (let i = 0; i < 30; i++) {
            setTimeout(() => {
                const el = document.createElement('div');
                el.className = 'fire-particle';
                el.textContent = fireEmojis[Math.floor(Math.random() * fireEmojis.length)];
                el.style.left = Math.random() * window.innerWidth + 'px';
                el.style.top = Math.random() * window.innerHeight + 'px';
                el.style.fontSize = (1.5 + Math.random() * 3) + 'rem';
                document.body.appendChild(el);
                setTimeout(() => el.remove(), 2000);
            }, i * 50);
        }
    }

    function efeitoBeijo() {
        aplicarTema('beijo');
        tocarAudiosBeijo();
        const beijoEmojis = ['💋', '💋', '💋', '💕', '💗', '💖', '💋', '💋'];
        for (let i = 0; i < 25; i++) {
            setTimeout(() => {
                const el = document.createElement('div');
                el.className = 'beijo-particle';
                el.textContent = beijoEmojis[Math.floor(Math.random() * beijoEmojis.length)];
                el.style.left = Math.random() * window.innerWidth + 'px';
                el.style.top = Math.random() * window.innerHeight + 'px';
                el.style.fontSize = (1.5 + Math.random() * 2.5) + 'rem';
                const tx = (Math.random() - 0.5) * 300;
                const ty = (Math.random() - 0.5) * 300 - 50;
                el.style.setProperty('--tx', tx + 'px');
                el.style.setProperty('--ty', ty + 'px');
                document.body.appendChild(el);
                setTimeout(() => el.remove(), 2200);
            }, i * 60);
        }
    }

    function posicionarBotao(botao) {
        const winWidth = window.innerWidth;
        const winHeight = window.innerHeight;
        const btnWidth = 140;
        const btnHeight = 60;
        const margin = 15;
        const maxX = Math.max(winWidth - btnWidth - margin, 0);
        const maxY = Math.max(winHeight - btnHeight - margin, 0);
        let newX = Math.random() * maxX;
        let newY = Math.random() * maxY;
        newX = Math.min(Math.max(newX, margin), maxX);
        newY = Math.min(Math.max(newY, margin), maxY);
        botao.style.left = newX + 'px';
        botao.style.top = newY + 'px';
        botao.style.margin = '0';
    }

    function bloquearBotaoNao() {
        if (btnNao) {
            btnNao.classList.add('bloqueado');
        }
    }

    function desbloquearBotaoNao() {
        if (btnNao) {
            btnNao.classList.remove('bloqueado');
        }
    }

    // ===== BOTÃO SIM =====
    btnSim.addEventListener('click', function() {
        if (estaBloqueado) return;

        const ehRaro = Math.random() < CHANCE_RARO;
        let emoji;
        let ehEspecial = false;
        let duracao = 1200;

        if (ehRaro) {
            const chavesEspeciais = Object.keys(emojisEspeciais);
            const especialSorteado = chavesEspeciais[Math.floor(Math.random() * chavesEspeciais.length)];
            emoji = especialSorteado;
            ehEspecial = true;
            duracao = emojisEspeciais[emoji].duracao;
        } else {
            emoji = emojis[Math.floor(Math.random() * emojis.length)];
            ehEspecial = false;
            duracao = 1200;
        }

        if (ehEspecial) {
            if (emoji === '🫦') {
                efeitoBeijo();
            }
            if (emoji === '❤️‍🔥') {
                efeitoFogo();
            }
        }

        const el = document.createElement('div');
        el.className = 'emoji-particle' + (ehEspecial ? ' especial' : '');
        el.textContent = emoji;

        const rect = btnSim.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        el.style.left = centerX + 'px';
        el.style.top = centerY + 'px';

        const angle = Math.random() * 2 * Math.PI;
        const distance = 80 + Math.random() * 150;
        const tx = Math.cos(angle) * distance;
        const ty = Math.sin(angle) * distance - 40;
        el.style.setProperty('--tx', tx + 'px');
        el.style.setProperty('--ty', ty + 'px');

        const size = ehEspecial ? 3.5 + Math.random() * 2 : 2 + Math.random() * 2.5;
        el.style.fontSize = size + 'rem';

        emojiContainer.appendChild(el);

        if (ehEspecial) {
            criarOverlay();
            bloquearBotaoNao();
            if (btnNao) {
                btnNao.style.display = 'none';
            }
        }

        setTimeout(() => {
            el.remove();
            if (ehEspecial) {
                removerOverlay();
                desbloquearBotaoNao();
                if (btnNao) {
                    btnNao.style.display = 'flex';
                }
                criarBotaoNao(false);
            }
        }, duracao);

        const heart = document.createElement('div');
        heart.className = 'heart-burst';
        heart.textContent = ['❤️','💕','💗','💖','💘'][Math.floor(Math.random() * 5)];
        heart.style.left = (rect.left + Math.random() * rect.width) + 'px';
        heart.style.top = (rect.top + Math.random() * rect.height) + 'px';
        document.body.appendChild(heart);
        setTimeout(() => heart.remove(), 2000);

        btnSim.style.transform = 'scale(0.9)';
        setTimeout(() => {
            btnSim.style.transform = '';
        }, 150);
    });

    // ===== INICIALIZAÇÃO =====
    window.addEventListener('load', function() {
        preCarregarAudios();

        let idioma = getIdiomaDaURL();
        if (!idioma) {
            try {
                const salvo = localStorage.getItem('idioma_preferido');
                if (salvo && TRADUCOES[salvo]) {
                    idioma = salvo;
                }
            } catch (e) {}
        }
        if (!idioma) {
            idioma = detectarIdioma();
        }

        traducaoAtual = TRADUCOES[idioma] || TRADUCOES['pt'];
        aplicarIdioma(idioma);
    });

    window.addEventListener('beforeunload', function() {
        limparAudios();
    });

})();
