'use strict';
export default class LandCtrl {
    constructor() {
        this.responsCarousel = [
            {
              breakpoint: 768,
              settings: {
                arrows: false,
                dots:true
              }
            }
        ];
        this.active_slide_1 = 'active';
        this.active_slide_2 = '';
        this.active_slide_3 = '';
        this.date_question = [
        	{
        		"id":"1",
        		"question":"Когда стартует проект?",
        		"answer":"сезон стартует 4го июля, но зарегистрироваться и оплатить необходимо до 3го июля."
        	},
        	{
        		"id":"2",
        		"question":"Как долго мне нужно тренироваться каждый раз?",
        		"answer":"тренировка разбита на несколько частей. Домашнее задание нужно делать в течение дня, а основная часть займет не более 40 минут."
        	},
        	{
        		"id":"3",
        		"question":"Для тренировок, наверное, нужно покупать инвентарь?",
        		"answer":"Никакой инвентарь не требуется - все проходит в домашних условиях. Нужно только ваше желание."
        	},
        	{
        		"id":"4",
        		"question":"Тренироваться нужно каждый день?",
        		"answer":" В неделю входит 5 ежедневных тренировок. Плюс недельное испытание."
        	},
        	{
        		"id":"5",
        		"question":"Есть ли ограничения по возрасту?",
        		"answer":"От 18 лет и до бесконечности."
        	},
        	{
        		"id":"6",
        		"question":"Я живу не в Москве. Я могу принять участие в проекте?",
        		"answer":"Участие можно принимать из любого города или страны, необходим только доступ в интернет."
        	},
        	{
        		"id":"7",
        		"question":"Я живу не в России. Как мне платить?",
        		"answer":"Платежные системы Яндекс Кассы, доступны из любой страны, нужно только выбрать подходящий."
        	},
        	{
        		"id":"8",
        		"question":"Каков последний срок оплаты курса?",
        		"answer":"Крайний срок для текущего сезона 3 июля 2016 года."
        	},
        	{
        		"id":"9",
        		"question":"Расскажите подробнее о тарифах?",
        		"answer":"«Одиночка» участвует только один человек; «Парный» для двоих (не важно, кем вы приходитесь друг другу); «Командный» для группы из 5 человек (не важно, кем вы приходитесь друг другу). Главное, что участвовать в паре намного интереснее!"
        	},
        	{
        		"id":"10",
        		"question":"Как делать ежедневные и еженедельные отчеты?",
        		"answer":"В конце каждого дня тебе нужно будет писать мини отчет. Прояви себя! Докажи, что ты действительно работаешь, нам нужны твои ощущения. Помни, что ты в игре, и твоя победа зависит только от тебя. И ЕЩЕ, БОЛЬШЕ ПУБЛИКАЦИЙ В ИНСТАГРАМЕ – БОЛЬШЕ ПРИЗОВ!"
        	},
        	{
        		"id":"11",
        		"question":"У меня есть ограничения по здоровью. Могу ли я  участвовать?",
        		"answer":"Лучше проконсультироваться с вашим врачом, показав видео тренировок."
        	},
        	{
        		"id":"12",
        		"question":"Если я не гражданка РФ, могу ли я получить приз?",
        		"answer":"Выигрыш возможен для гражданина любой страны."
        	},
        	{
        		"id":"13",
        		"question":"В проекте могут участвовать и мужчины, и женщины?",
        		"answer":"Да! Особенно интересно участвовать вдвоем."
        	},
        	{
        		"id":"14",
        		"question":"Как определяются победители?",
        		"answer":"Во время финальной, пятой неделе мы проведем серию финалов, по результатам которых будет выбраны победители, они проходят в финальное голосование. Таким образом, мы сделаем битву за главные призы максимально честной."
        	},
        	{
        		"id":"15",
        		"question":"За что могут отстранить от участия?",
        		"answer":"- За невыполнение ежедневного отчёта о тренировках и питании. - За невыполнение в установленные сроки еженедельного задания. - За некорректное поведение по отношению к другим участникам и персоналу проекта."
        	},
        	{
        		"id":"16",
        		"question":"Можно ли подделать фотографии «до» и «после»?",
        		"answer":"Для каждой фото будут сообщаться кодовые слова, которые необходимо будет указывать на листке с датой. Более подробные инструкции получат участники накануне дня фотографирования."
        	},
        	{
        		"id":"17",
        		"question":"Есть ли правила для видеосъемки?",
        		"answer":"Видео можно снимать на камеру телефона или веб-камеру. Главное, чтобы на видео было видно все ваше тело в движении и было достаточно света. Также необходимо, чтобы снимающий считал количество сделанных упражнений громко и внятно. Видео должно быть сделано одним кадром, без монтажа."
        	},
        	{
        		"id":"18",
        		"question":"Как я буду получать задания?",
        		"answer":"Каждый день в личном кабинете у тебя будет открываться новый день недели с новым заданием."
        	}

        ]
    }
}

