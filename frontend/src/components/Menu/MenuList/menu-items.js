import { assets } from "../../../assets/assets";

export const menu_list = [
    {
        menu_name: "Suppen",
        menu_image: assets.dal_2
    },
    {
        menu_name: "Vorspeisen",
        menu_image: assets.pakoras
    },
    {
        menu_name: "Salate",
        menu_image: assets.salat
    },
    {
        menu_name: "Vegetarisch",
        menu_image: assets.paneer
    },
    {
        menu_name: "Chicken",
        menu_image: assets.chicken4
    },
    {
        menu_name: "Lamm",
        menu_image: assets.chicken3
    },
    {
        menu_name: "Ente",
        menu_image: assets.duck
    },
    {
        menu_name: "Fisch",
        menu_image: assets.fish
    },
    {
        menu_name: "Scampi",
        menu_image: assets.prawn
    },
    {
        menu_name: "Tandoori",
        menu_image: assets.tandoori
    },
    {
        menu_name: "Reisgerichte",
        menu_image: assets.biryani
    },
    {
        menu_name: "Beilagen",
        menu_image: assets.naan
    },
    {
        menu_name: "Desserts",
        menu_image: assets.gulab_jamun
    }]

export const items = [
        // Suppen

    {
        'name':'1. Indische Linsensuppe',
        'description':'Dal Shorba',
        'price':'6,30',
        'category': 'Suppen',
        'allergies': ['C', 'G'],
        "inShop": true
    },
    {
        'name':'2. Indische Tomatensuppe',
        'description':'Tomaten Shorba - exotische Tomatensuppe verfeinert mit einem Schuss Sahne',
        'price':'6,30',
        'category': 'Suppen',
        'allergies': ['C', 'G'],
        "inShop": true
    },
    {
        'name':'3. Indische Gemüsesuppe',
        'description':'Sabzi Shorba mit frischem Gemüse',
        'price':'6,30',
        'category': 'Suppen',
        'allergies': ['G'],
        "inShop": true
    },
    {
        'name':'4. Indische Hühnerfleischsuppe',
        'description':'Chicken Shorba mit Hähnchenfleisch, Ingwer und frischem Koriander',
        'price':'6,90',
        'category': 'Suppen',
        'allergies': ['C', 'G', 'H'],
        "inShop": true
    },
    {
        'name':'5. Indische Mango-Safran-Suppe',
        'description':'Mangosaffron Shorba mit Mangofruchtfleisch, Kokosmilch und Safran',
        'price':'6,90',
        'category': 'Suppen',
        'allergies': ['C', 'G', 'E'],
        "inShop": true
    },
    
    // Vorspeisen

    {
        'name': '6. Samosa',
        'description': 'Zwei Teigtaschen gefüllt mit Kartoffeln, Erbsen, Rosinen und Cashews',
        'price': '7,90',
        'category': 'Vorspeisen',
        'allergies': ['A', 'A2', 'H4'],
        "inShop": true
    },
    {
        'name': '7. Chicken Samosa',
        'description': 'Zwei Teigtaschen gefüllt mit Hühnerfleisch, Kartoffeln, Erbsen, Rosinen und Cashews',
        'price': '8,90',
        'category': 'Vorspeisen',
        'allergies': ['A', 'A2', 'C', 'H4'],
        "inShop": true
    },
    {
        'name': '8. Paneer Pakoras',
        'description': 'in Kichererbsenmehl gewendeter und frittierter hausgemachter Rahmkäse',
        'price': '8,50',
        'category': 'Vorspeisen',
        'allergies': ['C', 'F', 'G'],
        "inShop": true
    },
    {
        'name': '9. Ghobi Pakoras',
        'description': 'frischer Blumenkohl in Kichererbsenmehl frittiert',
        'price': '7,90',
        'category': 'Vorspeisen',
        'allergies': ['F'],
        "inShop": true
    },
    {
        'name': '10. Aloo Pakoras',
        'description': 'frische Kartoffeln in Kichererbsenmehl frittiert',
        'price': '7,90',
        'category': 'Vorspeisen',
        'allergies': ['F'],
        "inShop": true
    },
    {
        'name': '11. Chicken Pakoras',
        'description': 'Hühnerfleisch in Kichererbsenmehl frittiert',
        'price': '8,50',
        'category': 'Vorspeisen',
        'allergies': ['C', 'F'],
        "inShop": true
    },
    {
        'name': '12. Jhinga Pakoras',
        'description': 'Garnelen in Kichererbsenmehl frittiert',
        'price': '12,90',
        'category': 'Vorspeisen',
        'allergies': ['F', 'O'],
        "inShop": true
    },
    {
        'name': '13. Fisch Pakoras',
        'description': 'frischer Fisch in Kichererbsenmehl frittiert',
        'price': '12,90',
        'category': 'Vorspeisen',
        'allergies': ['D', 'F'],
        "inShop": true
    },
    {
        'name': '14. Gemischter Vorspeisenteller',
        'description': 'frisches Gemüse in Kichererbsenmehl frittiert',
        'price': '15,90',
        'category': 'Vorspeisen',
        'allergies': ['F'],
        "inShop": true
    },
    {
        'name': '15. Gemischter Vorspeisenteller mit Fleisch',
        'description': 'frisches Gemüse und Hühnerfleisch in Kichererbsenmehl frittiert',
        'price': '16,90',
        'category': 'Vorspeisen',
        'allergies': ['A', 'A2', 'C', 'F'],
        "inShop": true
    },

    // Salat

    {
        'name':'16. Salat der Saison',
        'description': 'gemischter Salat mit hausgemachtem Dressing - auf Wunsch auch mit Essig',
        'price': '7,90',
        'category': 'Salate',
        'allergies': ['G'],
        "inShop": true
    },
    {
        'name':'17. Indian Salat',
        'description': 'gemischter Salat mit Tomaten, Gurke, Zwiebeln, grünem Chili und Zitrone',
        'price': '7,90',
        'category': 'Salate',
        'allergies': ['G'],
        "inShop": true
    },
    {
        'name':'18. Tasty Salat',
        'description': 'gemischter Salat mit eingelegten Kräutern, Eisbergsalat, Karotte und Rote Beete mit marinierten Tandoori-Hähnchenstücken gegrillt im indischen Lehmofen',
        'price': '11,90',
        'category': 'Salate',
        'allergies': ['A', 'A2', 'C', 'G'],
        "inShop": true
    },
    {
        'name':'19. Jhinga Salat',
        'description': 'großer indischer Salat mit marinierten, geschälten Tiger-Riesengarnelen gegrillt im original indischen Lehmofen',
        'price': '14,50',
        'category': 'Salate',
        'allergies': ['G', 'O'],
        "inShop": true
    },
    
    // Vegetarisch
    
    {
        'name': '22. Shahi Sabzi (leicht scharf)',
        'description': 'frisches gemischtes Gemüse, Ingwer, Knoblauch und Kokosmilch, Nordindische Art, serviert mit Reis',
        'price': '12,90',
        'category':"Vegetarisch",
        'allergies': ['A, A1, A2, F, G'],
        "inShop": true
    },
    {
        'name':'23. Kadhai Paneer (leicht scharf)',
        'description':'frischer hausgemachter Rahmkäse mit Paprika, Zwiebeln, Ingwer und Knoblauch gebraten in Currysoße, serviert mit Reis',
        'price':'13,90',
        'category':"Vegetarisch",
        'allergies': ['A, A1, A2, C, F, G'],
        "inShop": true
    },  
    {
        'name':'24. Palak Paneer',
        'description':'hausgemachter gebratener Rahmkäse mit Spinat, Zwiebeln, Ingwer, Knoblauch und exotischen Gewürzen, serviert mit Reis',
        'price':'13,90',
        'category':"Vegetarisch",
        'allergies': ['G'],
        "inShop": true
    },        
    {
        'name':'25. Dal Makhani',
        'description':'verschiedene Linsen mit Knoblauch, frischem Ingwer und Tomaten, eine Nacht langsam über dem Lehmofen gegart, abgeschmeckt mit indischer Butter, serviert mit Reis',
        'price':'12,90',
        'category':"Vegetarisch",
        'allergies': ['G'],
        "inShop": true
    },        
    {
        'name':'26. Dal Tadka(mittel scharf)',
        'description':'Linsen mit Knoblauch, Ingwer, gehackte Zwiebel, Curryblätter, Senfkerne und rotem Chili, serviert mit Reis',
        'price':'12,90',
        'category':"Vegetarisch",
        'allergies': ['G'],
        "inShop": true
    },  
    {
        'name':'27. Chana Amritsari',
        'description':'Kichererbsen und Kartoffeln, in einer nordindischen Soße aus einer speziellen würzigen Mischung aus Amritsar, gekocht süß und sauer im Geschmack, serviert mit Reis',
        'price':'12,90',
        'category':"Vegetarisch",
        'allergies': ['G'],
        "inShop": true
    },  
    {
        'name':'28. Aloo Gobhi Masala (leicht scharf)',
        'description':'gebratene Kartoffeln, Blumenkohl, gehackte Zwiebeln und Currysoße, serviert mit Reis',
        'price':'12,90',
        'category':"Vegetarisch",
        'allergies': ['G'],
        "inShop": true
    },
    {
        'name':'29. Bhindi Do Pyaza (mittel scharf)',
        'description':'frisches indisches Okragemüse mit Ingwer, Knoblauch und Zwiebeln in Currysoße nach nordindischer Art, serviert mit Reis',
        'price':'13,90',
        'category':"Vegetarisch",
        'allergies': ['G'],
        "inShop": true
    },
    {
        'name':'30. Shahi Paneer (leicht scharf)',
        'description':'hausgemachter Frischkäse mit Knoblauch, Ingwer, Zwiebeln und Tomaten-Curry-Soße, serviert mit Reis',
        'price':'13,90',
        'category':"Vegetarisch",
        'allergies': ['G', 'H1', 'H4'],
        "inShop": true
    },
    {
        'name':'31. Taj Mahal Kofte',
        'description':'mit hausgemachter Cashew-Screen-Soße, passend zu Rahmkäse und Rosinen-Gericht nach königlichem Rezept, serviert mit Reis',
        'price':'13,90',
        'category':"Vegetarisch",
        'allergies': ['G', 'H1', 'H4'],
        "inShop": true
    },
    {
        'name':'32. Paneer Makhni',
        'description':'hausgemachter Rahmkäse mit Knoblauch, Ingwer und Tomaten-Cashew-Currysoße, serviert mit Reis',
        'price':'13,90',
        'category':"Vegetarisch",
        'allergies': ['G', 'H1', 'H4'],
        "inShop": true
    },
    {
        'name':'33. Navratan Korma',
        'description':'frische gemischte Gemüsesorten mit Rahmkäse, Cashewnuss-Soße, Cashews und Rosinen, serviert mit Reis',
        'price':'13,90',
        'category':"Vegetarisch",
        'allergies': ['G', 'H1', 'H4'],
        "inShop": true
    },

    // Chicken items

    {
        'name':'40. Chicken Curry (leicht scharf)',
        'description':'Hühnerfilet-Stücke mit Ingwer, Knoblauch und nordindischer Curryoße, serviert mit Reis',
        'price':'14,90',
        'category':'Chicken',
        'allergies': ['G'],
        "inShop": true
    },
    {
        'name':'41. Chicken Sabzi (leicht scharf)',
        'description':'Hühnerfilet-Stücke mit frischem Gemüse, Ingwer, Knoblauch und nordindischer Curryoße, serviert mit Reis',
        'price':'14,90',
        'category':'Chicken',
        'allergies': ['G'],
        "inShop": true
    },
    {
        'name':'42. Chicken Saag (leicht scharf)',
        'description':'eine wundervolle Komposition aus eingelegtem Hähnchenfilet, Spinat, frischem Ingwer, Knoblauch und indischen Gewürzen nach Punjabi-Art gegart, serviert mit Reis',
        'price':'14,90',
        'category':'Chicken',
        'allergies': ['G'],
        "inShop": true
    },
    {
        'name':'43. Chicken Nilgiri (leicht scharf)',
        'description':'Hühnerfleisch mit orientalischer Minzsoße, Kokosmilch, Kokospulver, Spinat, Ingwer und Knoblauch, serviert mit Reis',
        'price':'14,90',
        'category':'Chicken',
        'allergies': ['G', 'L'],
        "inShop": true
    },
    {
        'name':'44. Kadhai Chicken',
        'description':'Hühnerbrustfilet mit Zwiebeln, Paprika, Ingwer und Knoblauch in Currysoße nach nordindischer Art, serviert mit Reis',
        'price':'14,90',
        'category':'Chicken',
        'allergies': ['G'],
        "inShop": true
    },
    {
        'name':'45. Chicken Madrasi (scharf)',
        'description':'Hühnerbrustfilet mit Kokosmilch, Kokospulver, Currysoße, Curryblättern, Senfsamen, Ingwer und Knoblauch im südindischen Stil gekocht, serviert mit Reis',
        'price':'14,90',
        'category':'Chicken',
        'allergies': ['G','K', 'L'],
        "inShop": true
    },
    {
        'name':'46. Chicken Jalfrezi (scharf)',
        'description':'Hühnerbrustfilet mit Kokosmilch, Kokospulver, Zwiebeln, Paprika, Ingwer und Knoblauch in Tomaten-Currysoße, serviert mit Reis',
        'price':'14,90',
        'category':'Chicken',
        'allergies': ['G', 'L'],
        "inShop": true
    },
    {
        'name':'47. Chicken Vindaloo (sehr scharf)',
        'description':'Hühnerbrustfilet mit Kartoffeln, Kokosmilch, Kokospulver, Ingwer und Knoblauch in Vindaloo-Currysoße, serviert mit Reis',
        'price':'14,90',
        'category':'Chicken',
        'allergies': ['G', 'L'],
        "inShop": true
    },
    {
        'name':'48. Chicken Korma',
        'description':'Hühnerbrustfilet in einer cremigen Cashew-Currysoße, mit Kokospulver, Rosinen, Kokos, Mandeln, Knoblauch und Ingwer , serviert mit Reis',
        'price':'15,90',
        'category':'Chicken',
        'allergies': ['G', 'H1', 'H4'],
        "inShop": true
    },
    {
        'name':'49. Mango Chicken',
        'description':'Hühnerbrustfilet, Mango-Kokoscreme, Kokos, Mango-Currysoße und Mangostücken, serviert mit Reis',
        'price':'15,90',
        'category':'Chicken',
        'allergies': ['G', 'H1', 'H4'],
        "inShop": true
    },
    {
        'name':'50. Butter Chicken',
        'description':'mariniertes Hühnerfleisch in Joghurt und indischen Gewürzen in Tandoor mit Ingwer, Knoblauch und Curry-Tomaten-Cashewsoße',
        'price':'15,90',
        'category':'Chicken',
        'allergies': ['G', 'H1', 'H4'],
        "inShop": true
    },

    // Lamm

    {
        'name':'55. Lamb Curry (leicht scharf)',
        'description': 'Lammfleisch mit Ingwer, Knoblauch und nordindischer Curryoße, serviert mit Reis',
        'price': '17,90',
        'category':'Lamm',
        'allergies': ['G'],
        "inShop": true
    },
    {
        'name':'56. Bhuna Gosht (mittel scharf)',
        'description': 'Lammfleisch mit Ingwer, Knoblauch, gehackten Zwiebeln, gebratener Zwiebel und heißer Curryoße (nordindischer Stil), serviert mit Reis',
        'price': '17,90',
        'category':'Lamm',
        'allergies': ['G'],
        "inShop": true
    },
    {
        'name':'57. Lamb Sabzi (leicht scharf)',
        'description': 'Lammfleisch mit frischem Gemüse, Ingwer, Knoblauch und nordindischer Curryoße, serviert mit Reis',
        'price': '17,90',
        'category':'Lamm',
        'allergies': ['G'],
        "inShop": true
    },
    {
        'name':'58. Lamb Kadhai',
        'description': 'Lammfleisch mit Zwiebeln, Paprika, Ingwer und Knoblauch in Currysoße nach nordindischer Art, serviert mit Reis',
        'price': '17,90',
        'category':'Lamm',
        'allergies': ['G'],
        "inShop": true
    },
    {
        'name':'59. Lamb Madrasi (scharf)',
        'description': 'Lammfleisch mit Kokosmilch, Kokospulver, Currysoße, Curryblättern, Senfsamen, Ingwer und Knoblauch im südindischen Stil gekocht, serviert mit Reis',
        'price': '17,90',
        'category':'Lamm',
        'allergies': ['G', 'L'],
        "inShop": true
    },
    {
        'name':'60. Lamb Vindaloo (sehr scharf)',
        'description': 'Lammfleisch mit Kartoffeln, Kokosmilch, Kokospulver, Ingwer und Knoblauch in Vindaloo-Currysoße, serviert mit Reis',
        'price': '17,90',
        'category':'Lamm',
        'allergies': ['G', 'L'],
        "inShop": true
    },
    {
        'name':'61. Palak Gosht (leicht scharf)',
        'description': 'eine wundervolle Komposition aus eingelegtem Lammfleisch, Spinat, frischem Ingwer, Knoblauch und indischen Gewürzen nach Punjabi Art gegart, serviert mit Reis',
        'price': '17,90',
        'category':'Lamm',
        'allergies': ['G'],
        "inShop": true
    },
    {
        'name':'62. Lamb Nilgiri (leicht scharf)',
        'description': 'Lammfleisch mit orientalischer Minzsoße, Kokosmilch, Kokospulver, Spinat, Ingwer und Knoblauch, serviert mit Reis',
        'price': '17,90',
        'category':'Lamm',
        'allergies': ['G', 'L'],
        "inShop": true
    },
    {
        'name':'63. Lamb Korma (sehr scharf)',
        'description': 'Lammfleisch in einer cremigen Cashew-Currysoße, mit Kokospulver, Rosinen, Mandeln, Kokos, Knoblauch und Ingwer, serviert mit Reis',
        'price': '17,90',
        'category':'Lamm',
        'allergies': ['G', 'H1', 'H4'],
        "inShop": true
    },
    {
        'name':'64. Mutton Khumb Wala',
        'description': 'Lamm mit Champignons, Knoblauch, Ingwer, Cashewnuss-Currysauce und Kokosmilch, serviert mit Reis',
        'price': '17,90',
        'category':'Lamm',
        'allergies': ['G', 'H1', 'H4'],
        "inShop": true
    },
    {
        'name':'65. Mango Lamb (sehr scharf)',
        'description': 'Lammfleisch, Mango-Kokoscreme, Kokos, Mango-Currysoße und Mangostücken, serviert mit Reis',
        'price': '17,90',
        'category':'Lamm',
        'allergies': ['G', 'H1', 'H4'],
        "inShop": true
    },

    // Ente

    {
        'name':'70. Duck Curry (leicht scharf)',
        'description': 'Entenfleisch mit Ingwer, Knoblauch und nordindischer Curryoße, serviert mit Reis',
        'price': '18,90',
        'category':'Ente',
        'allergies': ['G'],
        "inShop": true
    },
    {
        'name':'71. Duck Sabzi (leicht scharf)',
        'description': 'Entenfleisch mit frischem Gemüse, Ingwer, Knoblauch und nordindischer Curryoße, serviert mit Reis',
        'price': '18,90',
        'category':'Ente',
        'allergies': ['G'],
        "inShop": true
    },
    {
        'name':'72. Duck Saag (leicht scharf)',
        'description': 'eine wundervolle Komposition aus eingelegtem Entenfleisch, Spinat, frischem Ingwer, Knoblauch und indischen Gewürzen nach Punjabi-Art gegart, serviert mit Reis',
        'price': '18,90',
        'category':'Ente',
        'allergies': ['G'],
        "inShop": true
    },
    {
        'name':'73. Duck Vindaloo (sehr scharf)',
        'description': 'Entenfleisch mit Kartoffeln, Kokosmilch, Kokospulver, Ingwer und Knoblauch in Vindaloo-Currysoße, serviert mit Reis',
        'price': '18,90',
        'category':'Ente',
        'allergies': ['G', 'L'],
        "inShop": true
    },
    {
        'name':'74. Ente Khumb Wala',
        'description': 'Entenfleisch mit Champignons, Knoblauch, Ingwer, Cashewnuss-Currysauce und Kokosmilch, serviert mit Reis',
        'price': '18,90',
        'category':'Ente',
        'allergies': ['G', 'L', 'H1', 'H4'],
        "inShop": true
    },
    {
        'name':'75. Butter Duck',
        'description': 'mariniertes Entenfleisch in Joghurt und indischen Gewürzen in Tandoor mit Ingwer, Knoblauch und Curry-Tomaten-Cashewsoße',
        'price': '18,90',
        'category':'Ente',
        'allergies': ['G', 'H4'],
        "inShop": true
    },
    {
        'name':'76. Ente Kadhai',
        'description': 'Entenfleisch mit Zwiebeln, Paprika, Ingwer und Knoblauch in Currysoße nach nordindischer Art, serviert mit Reis',
        'price': '18,90',
        'category':'Ente',
        'allergies': ['G'],
        "inShop": true
    },
    {
        'name':'77. Mango Duck (sehr scharf)',
        'description': 'Entenfleisch, Mango-Kokoscreme, Kokos, Mango-Currysoße und Mangostücken, serviert mit Reis',
        'price': '18,90',
        'category':'Ente',
        'allergies': ['G', 'L', 'H1', 'H4'],
        "inShop": true
    },
    {
        'name':'78. Duck Madrasi (scharf)',
        'description': 'Entenfleisch mit Kokosmilch, Kokospulver, Currysoße, Curryblättern, Senfsamen, Ingwer und Knoblauch im südindischen Stil gekocht, serviert mit Reis',
        'price': '18,90',
        'category':'Ente',
        'allergies': ['G', 'L'],
        "inShop": true
    },

    // Tandoori

    {
        'name':'80. Chicken Tikka Masala',
        'description': 'mariniertes Hühnerfleisch in Joghurt und indischen Gewürzen in Tandoor mit Zwiebeln, Paprika, Ingwer und Knoblauch in Curry-Tomaten-Cashewnusssauce',
        'price': '17,90',
        'category': 'Tandoori',
        'allergies': ['G', 'H1', 'H4'],
        "inShop": true
    },
    {
        'name':'81. Paneer Tikka Masala',
        'description': 'marinierter hausgemachter frischer Rahmkäse in Joghurt und indischen Gewürzen in Tandoor mit Zwiebeln, Paprika, Ingwer und Knoblauch in Curry-Tomaten-Cashewnusssauce',
        'price': '17,90',
        'category': 'Tandoori',
        'allergies': ['G', 'H1', 'H4'],
        "inShop": true
    },
    {
        'name':'82. Tandoori Chicken',
        'description': 'zwei marinierte Hühnerkeulen 24 Stunden in Joghurt und indischen Gewürzen in Tandoor mit Zwiebeln, Paprika, Ingwer und Knoblauch in Curry-Tomaten-Cashewnusssauce',
        'price': '17,90',
        'category': 'Tandoori',
        'allergies': ['G', 'H1', 'H4'],
        "inShop": true
    },
    {
        'name':'83. Tasty Grillteller',
        'description': 'Tandoori Chicken, Chicken Tikka, Lamb Tikka, Seekh Kebab und Garnelen für 24 Stunden in Joghurt und indischen Gewürzen eingelegt mit Zwiebeln, Paprika, Ingwer und Knoblauch in Curry-Tomaten-Cashewnusssauce',
        'price': '20,90',
        'category': 'Tandoori',
        'allergies': ['G', 'H1', 'H4'],
        "inShop": true
    },
    {
        'name':'84. Lamb Tikka',
        'description': 'mariniertes Lammfleisch in Joghurt und indischen Gewürzen in Tandoor mit Zwiebeln, Paprika, Ingwer und Knoblauch in Curry-Tomaten-Cashewnusssauce',
        'price': '19,90',
        'category': 'Tandoori',
        'allergies': ['G', 'H1', 'H4'],
        "inShop": true
    },
    {
        'name':'85. Duck Tikka',
        'description': 'mariniertes Entenfleisch in Joghurt und indischen Gewürzen in Tandoor mit Zwiebeln, Paprika, Ingwer und Knoblauch in Curry-Tomaten-Cashewnusssauce',
        'price': '19,90',
        'category': 'Tandoori',
        'allergies': ['G', 'H1', 'H4'],
        "inShop": true
    },
    {
        'name':'86. Vegetable Tandoori',
        'description': 'marinierter hausgemachter frischer Rahmkäse, verschiedenes Gemüse, Ananas in Joghurt und indischen Gewürzen in Tandoor, Zwiebeln, Paprika, Ingwer, Knoblauch und Curry-Tomaten-Cashewnusssauce',
        'price': '16,90',
        'category': 'Tandoori',
        'allergies': ['G', 'H1', 'H4'],
        "inShop": true
    },        

    // Fish

    {
        'name':'88. Maschli Tikka',
        'description': 'gebratener Fisch in indischen Gewürzen mit Zwiebeln, Paprika, Ingwer, Knoblauch und Curry-Tomaten-Cashewnuss-Soße, serviert mit Reis',
        'price': '17,90',
        'category': 'Fisch',
        'allergies': ['G', 'H1', 'H4'],
        "inShop": true
    },
    {
        'name':'91. Maschli Madrasi (scharf)',
        'description': 'Fisch,mit Kokosmilch, Kokospulver, Currysoße, Curryblättern, Senfsamen, Ingwer und Knoblauch im südindischen Stil gekocht, serviert mit Reis',
        'price': '17,90',
        'category': 'Fisch',
        'allergies': ['G'],
        "inShop": true
    },
    {
        'name':'92. Fisch Curry (leicht scharf)',
        'description': 'Fisch mit Kokosmilch, Ingwer und Knoblauch und nordindischer Currysoße, serviert mit Reis',
        'price': '17,90',
        'category': 'Fisch',
        'allergies': ['G'],
        "inShop": true
    },
    {
        'name':'93. Mango Fisch',
        'description': 'mit Fisch, Mango-Kokoscreme, Kokos, Mango-Currysoße und Mangostücken, serviert mit Reis',
        'price': '17,90',
        'category': 'Fisch',
        'allergies': ['G', 'H1', 'H4'],
        "inShop": true
    },
    {
        'name':'94. Butter Fisch',
        'description': 'marinierter Fisch in Joghurt und indischen Gewürzen in Tandoor mit Ingwer, Knoblauch und Curry-Tomaten-Cashewnuss-Soße',
        'price': '17,90',
        'category': 'Fisch',
        'allergies': ['G', 'H1', 'H4'],
        "inShop": true
    },
    {
        'name':'95. Fisch Nilgiri (leicht scharf)',
        'description': 'Fisch mit orientalischer Minzsoße, Kokosmilch, Kokospulver, Spinat, Ingwer und Knoblauch, serviert mit Reis',
        'price': '17,90',
        'category': 'Fisch',
        'allergies': ['G', 'H1', 'H4'],
        "inShop": true
    },

    // Scampi

    {
        'name':'100. Jhinga Masala (leicht scharf)',
        'description': 'Scampi mit Kokosmilch, Ingwer, Knoblauch und nordindischer Currysoße, serviert mit Reis',
        'price': '18,90',
        'category': 'Scampi',
        'allergies': ['G'],
        "inShop": true
    },
    {
        'name':'101. Palak Jhinga(leicht scharf)',
        'description': 'Eine wundervolle Kombination aus eingelegtem Scampi, Spinat, frischem Ingwer, Knoblauch und indischen Gewürzen nach Punjabi Art gegart, serviert mit Reis',
        'price': '18,90',
        'category': 'Scampi',
        'allergies': ['G'],
        "inShop": true
    },
    {
        'name':'102. Butter Jhinga',
        'description': 'marinierte Scampi in Joghurt und indischen Gewürzen in Tandoor mit Ingwer, Knoblauch und Curry-Tomaten-Cashewnuss-Soße, serviert mit Reis',
        'price': '18,90',
        'category': 'Scampi',
        'allergies': ['H4'],
        "inShop": true
    },
    {
        'name':'103. Jhinga Madrasi',
        'description': 'Scampi mit Kokosmilch, Kokospulver, Currysauce, Curryblättern, Senfsamen, Ingwer und Knoblauch im südindischen Stil gekocht, serviert mit Reis',
        'price': '18,90',
        'category': 'Scampi',
        'allergies': ['G'],
        "inShop": true
    },    

    // Reisgerichte Rice


    {
        'name': '104. Taste of India Special (leicht scharf)',
        'description': 'Biryani mit langkörnigem Basmatireis verfeinert mit Gemüse, Hühnerfleisch, Lammfleisch, Mandeln, Kokos, Cashews, Rosinen, Zwiebeln, Paprika, Ingwer, Knoblauch, Gewürzen, Spezialsoße und Papadam',
        'price': '17,90',
        'category': 'Reisgerichte',
        'allergies': ['H1', 'H4'],
        "inShop": true
    },
    {
        'name': '105. Sabzi Biryani',
        'description': 'mit langkörnigem Basmatireis verfeinert mit frischem Gemüse, Mandeln, Kokos, Cashews, Rosinen, Zwiebeln, Paprika, Ingwer, Knoblauch, Gewürzen, Spezialsoße und Papadam',
        'price': '13,90',
        'category': 'Reisgerichte',
        'allergies': ['H1', 'H4'],
        "inShop": true
    },
    {
        'name': '106. Chicken Biryani',
        'description': 'mit langkörnigem Basmatireis verfeinert mit Hähnchenfleisch, Mandeln, Kokos, Cashews, Rosinen, Zwiebeln, Paprika, Ingwer, Knoblauch, Gewürzen, Spezialsoße und Papadam',
        'price': '14,90',
        'category': 'Reisgerichte',
        'allergies': ['H1', 'H4'],
        "inShop": true
    },
    {
        'name': '107. Lamb Biryani',
        'description': 'mit langkörnigem Basmatireis verfeinert mit Lammfleisch, Mandeln, Kokos, Cashews, Rosinen, Zwiebeln, Paprika, Ingwer, Knoblauch, Gewürzen, Spezialsoße und Papadam',
        'price': '17,90',
        'category': 'Reisgerichte',
        'allergies': ['H1', 'H4'],
        "inShop": true
    },
    {
        'name': '108. Scampi Biryani',
        'description': 'mit langkörnigem Basmatireis verfeinert mit Scampi, Mandeln, Kokos, Cashews, Rosinen, Zwiebeln, Paprika, Ingwer, Knoblauch, Gewürzen, Spezialsoße und Papadam',
        'price': '18,90',
        'category': 'Reisgerichte',
        'allergies': ['H1', 'H4'],
        "inShop": true
    },    

    // Beilagen

    {
        'name':'110. Basmati Reis',
        'description': '',
        'price':'3,50',
        'category': 'Beilagen',
        "inShop": true
    },        
    {
        'name':'111. Jeera Reis',
        'description': 'Reis mit Kümmelsamen und Koriander',
        'price':'3,90',
        'category': 'Beilagen',
        "inShop": true
    },
    {
        'name':'112. Tandoori Naan',
        'description': 'Weizenmehlbrot (vegan) im Ofen gebacken',
        'price':'3,50',
        'category': 'Beilagen',
        'allergies': ['A1', 'C', 'G'],
        "inShop": true
    },
    {
        'name':'113. Tandoori Garlic Naan',
        'description': 'Weizenmehlbrot (vegan) mit Knoblauch und Koriander im Ofen gebacken',
        'price':'4,50',
        'category': 'Beilagen',
        'allergies': ['A1', 'C', 'G'],
        "inShop": true
    },
    {
        'name':'114. Tandoori Paneer Naan',
        'description': 'Weizenmehlbrot (vegan) mit Rahmkäse und Koriander im Ofen gebacken',
        'price':'4,90',
        'category': 'Beilagen',
        'allergies': ['A1', 'C', 'G'],
        "inShop": true
    },
    // {
    //     'name':'Bathura',
    //     'description': 'Brot mit Öl frittiert',
    //     'price':'3,50',
    //     'category': 'Beilagen',
    // },
    {
        'name':'116. Tandoori Roti',
        'description': 'Vollkornmehlbrot (vegan) im Ofen gebacken',
        'price':'3,50',
        'category': 'Beilagen',
        'allergies': ['A1', 'C', 'G'],
        "inShop": true
    },
    {
        'name':'117. Tandoori Pudina Paratha',
        'description': 'Vollkornmehlbrot (vegan)mit frischer Minze außen knusprig und innen locker im Ofen gebacken',
        'price':'4,50',
        'category': 'Beilagen',
        'allergies': ['A1', 'C', 'G'],
        "inShop": true
    },
    {
        'name':'118. Papadam',
        'description': 'knuspriges Knabbergebäck',
        'price':'2,90',
        'category': 'Beilagen',
        'allergies': ['A1', 'C', 'G'],
        "inShop": true
    },
    {
        'name':'119. Pickle',
        'description': 'eingelegtes Gemüse und Obst',
        'price':'2,90',
        'category': 'Beilagen',
        "inShop": true
    },
    {
        'name':'120. Mango-Chutney',
        'description': '',
        'price':'2,90 €',
        'category': 'Beilagen',
        "inShop": true
    },

    // Desserts

    {
        'name':'130. Hausgemachte Gulab Jamun',
        'description': 'Milchpulverkugeln mit süßem Zuckersirup',
        'price': '6,90',
        'category': 'Desserts',
        'allergies': ['G'],
        "inShop": true
    },    
    {
        'name':'131. Hausgemachte Gulab Jamun Mango',
        'description': 'Milchpulverkugeln mit süßem Zuckersirup und Mango Cream',
        'price': '6,90',
        'category': 'Desserts',
        'allergies': ['G'],
        "inShop": true
    },    
    {
        'name':'132. Firni',
        'description': 'Honigmilch mit Reismehl, Mandeln, Cashews, Rosinen und Kokosnuss',
        'price': '6,90',
        'category': 'Desserts',
        'allergies': ['G'],
        "inShop": true
    },    
    {
        'name':'133. Mango Cream',
        'description': 'mit Vanilleeis',
        'price': '5,90',
        'category': 'Desserts',
        'allergies': ['G'],
        "inShop": true
    },    
    {
        'name':'134. Hausgemachtes Eis mit Sahne',
        'description': '3 Kugeln, wahlweise in den Sorten: Sizilianische Pistazie, Indian Mango, African Vanilla, Cookies & Cream, Belgian Chocolate',
        'price': '6,90',
        'category': 'Desserts',
        'allergies': ['G'],
        "inShop": true
    },    

    // drinks


    {
        'name':'Coca-Cola',
        'description': '1,0l, preis inkl. 0,15 € Pfand',
        'price': '2,80',
        'category': 'drinks',
        "inShop": true
    }, 

    {
        'name':'Coca-Cola light',
        'description': '1,0l, preis inkl. 0,15 € Pfand',
        'price': '2,80',
        'category': 'drinks',
        "inShop": true
    }, 

    {
        'name':'Fanta',
        'description': '1,0l, preis inkl. 0,15 € Pfand',
        'price': '2,80',
        'category': 'drinks',
        "inShop": true
    }, 

    {
        'name':'Sprite',
        'description': '1,0l, preis inkl. 0,15 € Pfand',
        'price': '2,80',
        'category': 'drinks',
        "inShop": true
    }, 

    {
        'name':'Radeberger',
        'description':'4,8 %vol. Alkohol, 0,5l preis inkl. 0,08 € Pfand',
        'price': '2,00',
        'category': 'drinks',
        "inShop": true
    },
    {
        'name':'Eibauer Schwarzbier',
        'description':'4,5 %vol. Alkohol, 0,5l preis inkl. 0,08 € Pfand',
        'price': '2,00',
        'category': 'drinks',
        "inShop": true
    },
    {
        'name':'Mixery',
        'description':'3,1 %vol. Alkohol, 0,5l preis inkl. 0,08 € Pfand',
        'price': '2,00',
        'category': 'drinks',
        "inShop": true
    },
    {
        'name':'Feldschlösschen',
        'description':'4,8 %vol. Alkohol, 0,5l preis inkl. 0,08 € Pfand',
        'price': '2,00',
        'category': 'drinks',
        "inShop": true
    },
    {
        'name':'Freiberger',
        'description':'4,8 %vol. Alkohol, 0,5l preis inkl. 0,08 € Pfand',
        'price': '2,00',
        'category': 'drinks',
        "inShop": true
    },
    {
        'name':'Erdinger Hefeweizen',
        'description':'4,8 %vol. Alkohol, 0,5l preis inkl. 0,08 € Pfand',
        'price': '2,00',
        'category': 'drinks',
        "inShop": true
    },

    {
        'name':'243 Dornfelder',
        'description': 'Schloss Proschwitz, 0,7L',
        'price': '31,00',
        'category': 'drinks',
        "inShop": true
    },
    {
        'name':'244 Spätburgunder',
        'description': 'Schloss Proschwitz, 0,7L',
        'price': '38,00',
        'category': 'drinks',
        "inShop": true
    },
    {
        'name':'245 Dolocetto dell\'alba DOC',
        'description': 'Treiso, 0,7L',
        'price': '23,00',
        'category': 'drinks',
        "inShop": true
    },
    {
        'name':'246 Barbera dell\'alba DOC',
        'description': 'Raimonda, 0,7L',
        'price': '23,00',
        'category': 'drinks',
        "inShop": true
    },
    {
        'name':'247 Barolo DOCG',
        'description': '0,7l',
        'price': '45,00',
        'category':'drinks',
        "inShop": true
    },
    {
        'name':'248 Chianti DOC',
        'description': 'Terre di Chiari, 0,7L',
        'price': '24,00',
        'category': 'drinks',
        "inShop": true
    },
    {
        'name':'249 Montepulciano d\'Abruzzo DOP',
        'description': 'Colle Cavallieri, 0,7L',
        'price': '25,00',
        'category': 'drinks',
        "inShop": true
    },
    {
        'name':'250 Primitivo Puglia IGT',
        'description': 'Terre di Montelusa, 0,7L',
        'price': '25,00',
        'category': 'drinks',
        "inShop": true
    },
    {
        'name':'251 Primitivo di Salento IGT',
        'description': 'halbtrocken, 0,7L',
        'price': '23,00',
        'category': 'drinks',
        "inShop": true
    },
    {
        'name':'252 Amarone della Valpolicella DOC',
        'description': 'Collezione Bertoni, 0,7L',
        'price': '40,00',
        'category': 'drinks',
        "inShop": true
    },
    
    {
        'name':'Gutswein rosé',
        'description': '0,7l',
        'price': '24,00',
        'category': 'drinks',
        "inShop": true
    },
    {
        'name':'Langrein rosé DOC',
        'description': 'Südtirol, Pischl, 0,7L',
        'price': '24,00',
        'category': 'drinks',
        "inShop": true
    },
    {
        'name':'Bardolino Chiaretto rosé',
        'description': '0,7l',
        'price': '28,00',
        'category': 'drinks',
        "inShop": true
    },
    {
        'name':'Müller Thurgau',
        'description': '0,7l',
        'price': '24,00',
        'category': 'drinks',
        "inShop": true
    },
    {
        'name':'Pinnot Blanc de Noir Kabinett',
        'description': '0,7l',
        'price': '28,00',
        'category': 'drinks',
        "inShop": true
    },
    {
        'name':'Riesling',
        'description': 'Bereich Meißen, 0,7L',
        'price': '24,00',
        'category': 'drinks',
        "inShop": true
    },

    {
        'name':'Pomino Bianco DOC',
        'description': '0,7l',
        'price': '24,00',
        'category': 'drinks',
        "inShop": true
    },
    {
        'name':'Chardonnay Terre Degli Osci IGP',
        'description': 'Colle Cavallieri, 0,7L',
        'price': '25,00',
        'category': 'drinks',
        "inShop": true
    },

    {
        'name':'Roero Arneis DOCG',
        'description': 'Pradalupo, 0,7L',
        'price': '24,00',
        'category': 'drinks',
        "inShop": true
    },

    {
        'name':'Chardonnay Südtirol DOC',
        'description': 'Kleinstein, 0,7L',
        'price': '29,00',
        'category': 'drinks',
        "inShop": true
    },

    {
        'name':'Lugana DOC',
        'description': 'i frati, 0,7L',
        'price': '28,00',
        'category': 'drinks',
        "inShop": true
    },
    


].map((item, idx) => ({
    ...item,
    _id: idx + 1
}));