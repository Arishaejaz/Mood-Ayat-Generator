
const ayats = {
            gratitude: [
                "Surah Ibrahim (14:7): And [remember] when your Lord proclaimed: 'If you are grateful, I will surely increase you [in favor]; but if you deny, indeed, My punishment is severe.'", 
                "Surah Al-Baqarah (2:152):So remember Me I will remember you. And be grateful to Me and do not deny Me.",
                "Surah Saba (34:13):Work, O family of David, in gratitude. 'But few of My servants are grateful.' ",
                "Surah An-Nahl (16:114):So eat of the lawful and good food which Allah has provided for you, and be grateful for the favor of Allah, if it is [indeed] Him that you worship.",
                "Surah Luqman (31:12): And We certainly gave Luqman wisdom [and said], 'Be grateful to Allah.' And whoever is grateful is grateful for [the benefit of] himself. And whoever denies [His favor] – then indeed, Allah is Free of need and Praiseworthy.",
                "Surah An-Nisa (4:147):What would Allah do with your punishment if you are grateful and believe? And ever is Allah Appreciative and Knowing.",
                "Surah Al-Isra (17:3):O descendants of those We carried in the ship with Noah.] Indeed, he was a grateful servant." ,
                "Surah Al-A'raf (7:10):And We have certainly established you upon the earth and made for you therein ways of livelihood. Little are you grateful.",
                "Surah Al-Baqarah (2:172):O you who have believed, eat from the good things which We have provided for you and be grateful to Allah if it is [indeed] Him that you worship.",
                "Surah Al-Hujurat (49:17):They consider it a favor to you that they have accepted Islam. Say, 'Do not consider your Islam a favor to me. Rather, Allah has conferred favor upon you that He has guided you to the faith, if you should be truthful.'"
             ],
            sad: [
                "Surah Al-Baqarah (2:186):And when My servants ask you about Me, indeed I am near. I respond to the invocation of the supplicant when he calls upon Me. So let them respond to Me [by obedience] and believe in Me that they may be [rightly] guided.",
                "Surah Ash-Sharh (94:5-6):For indeed, with hardship [will be] ease. Indeed, with hardship [will be] ease.",
                "Surah Al-Baqarah (2:286):Allah does not burden a soul beyond that it can bear. It will have [the consequence of] what [good] it has gained, and it will bear [the consequence of] what [evil] it has earned. Our Lord, do not impose blame upon us if we forget or make a mistake.",
                "Surah Az-Zumar (39:53):Say, 'O My servants who have transgressed against themselves [by sinning], do not despair of the mercy of Allah. Indeed, Allah forgives all sins. Indeed, it is He who is the Forgiving, the Merciful.'",
                "Surah Al-Tawbah (9:51):Say, 'Never will we be struck except by what Allah has decreed for us; He is our protector.' And upon Allah let the believers rely.",
                "Surah Al-Baqarah (2:153):O you who have believed, seek help through patience and prayer. Indeed, Allah is with the patient.",
                "Surah At-Tawbah (9:105):And say, 'Do [as you will], for Allah will see your deeds, and [so will] His Messenger and the believers. And you will be returned to the Knower of the unseen and the witnessed, and He will inform you of what you used to do.'",
                "Surah Al-Baqarah (2:216):But perhaps you hate a thing and it is good for you; and perhaps you love a thing and it is bad for you. And Allah Knows, while you know not.",
                "Surah Ar-Ra'd (13:28):Those who have believed and whose hearts are assured by the remembrance of Allah. Unquestionably, by the remembrance of Allah hearts are assured.",
                "Surah Al-Baqarah (2:214):Do you think that you will enter Paradise while such [trial] has not yet come to you as came to those who passed on before you? They were touched by poverty and hardship and were shaken until [even their] messenger and those who believed with him said, 'When is the help of Allah?' Unquestionably, the help of Allah is near."
            ],
            hope: [
                "Surah Az-Zumar (39:53): Say, 'O My servants who have transgressed against themselves [by sinning], do not despair of the mercy of Allah. Indeed, Allah forgives all sins. Indeed, it is He who is the Forgiving, the Merciful.'",
"Surah Ash-Sharh (94:5-6):For indeed, with hardship [will be] ease. Indeed, with hardship [will be] ease.",
"Surah Al-Baqarah (2:286):Allah does not burden a soul beyond that it can bear. It will have [the consequence of] what [good] it has gained, and it will bear [the consequence of] what [evil] it has earned.",
"Surah Al-Baqarah (2:216):But perhaps you hate a thing and it is good for you; and perhaps you love a thing and it is bad for you. And Allah knows, while you know not.",
"Surah Yunus (10:62-64):Unquestionably, [for] the allies of Allah there will be no fear concerning them, nor will they grieve – those who believed and were fearing Allah. For them are good tidings in the worldly life and in the Hereafter.",
"Surah Az-Zumar (39:10):Say, 'O My servants who have believed, fear your Lord. For those who do good in this world is good, and the earth of Allah is spacious. Indeed, the patient will be given their reward without account.'",
"Surah Al-Baqarah (2:186): And when My servants ask you concerning Me, indeed I am near. I respond to the invocation of the supplicant when he calls upon Me.",
"Surah Al-Baqarah (2:214): Unquestionably, the help of Allah is near.",
"Surah As-Saff (61:12):[If you believe and strive] He will forgive for you your sins and admit you to gardens beneath which rivers flow and pleasant dwellings in gardens of perpetual residence. That is the great attainment.",
"Surah At-Tawbah (9:105):And say, 'Do [as you will], for Allah will see your deeds, and [so will] His Messenger and the believers. And you will be returned to the Knower of the unseen and the witnessed, and He will inform you of what you used to do.'"
            ],
            lost: [
"Surah Az-Zumar (39:53): Say, 'O My servants who have transgressed against themselves [by sinning], do not despair of the mercy of Allah. Indeed, Allah forgives all sins. Indeed, it is He who is the Forgiving, the Merciful.",
"Surah Al-Baqarah (2:186): And when My servants ask you concerning Me, indeed I am near. I respond to the invocation of the supplicant when he calls upon Me. So let them respond to Me [by obedience] and believe in Me that they may be guided.",
"Surah Ash-Sharh (94:6):Indeed, with hardship [will be] ease.",
"Surah At-Tawbah (9:118):And [He also forgave] the three who were left behind [and regretted their error] to the point that the earth closed in on them in spite of its vastness and their souls confined them, and they were certain that there is no refuge from Allah except in Him. Then He turned to them so they could repent. Indeed, Allah is the Accepting of Repentance, the Merciful.",
"Surah Al-Imran (3:160):If Allah should aid you, no one can overcome you; but if He should forsake you, who is there that can aid you after Him? And upon Allah let the believers rely.",
"Surah An-Nur (24:46):We have certainly sent down distinct verses. And Allah guides whom He wills to a straight path.",
"Surah Yunus (10:12):And when affliction touches man, he calls upon Us, whether lying on his side, sitting, or standing; but when We remove from him his affliction, he continues as if he had never called upon Us to [relieve] an affliction that touched him. Thus is made pleasing to the transgressors that which they have been doing.",
"Surah Al-Baqarah (2:286):Allah does not burden a soul beyond that it can bear.",
"Surah Ar-Ra’d (13:28):Those who have believed and whose hearts are assured by the remembrance of Allah. Unquestionably, by the remembrance of Allah hearts are assured.",
"Surah Al-Ankabut (29:69): And those who strive for Us – We will surely guide them to Our ways. And indeed, Allah is with the doers of good."
            ]
        };

        const moodSelect = document.getElementById('mood');
        const generateAyatButton = document.getElementById('generateAyat');
        const ayatDisplay = document.getElementById('ayatDisplay');
        const ayatText = document.getElementById('ayatText');
        

        generateAyatButton.addEventListener('click', () => {
            const selectedMood = moodSelect.value;
            const randomAyat = ayats[selectedMood][Math.floor(Math.random() * ayats[selectedMood].length)];
            ayatText.textContent = randomAyat;
            ayatDisplay.classList.remove('hidden');
        });
