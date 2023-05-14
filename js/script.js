let theme = document.querySelector('#theme')
let themeIcon = document.querySelector('#theme-icon')

function changeTheme() {
    if (theme.getAttribute('href') == 'css/light-theme.css') {
        localStorage.setItem('theme', 'dark')
        theme.href = 'css/dark-theme.css'
        themeIcon.setAttribute('src', 'img/sun.png')
    } else {
        localStorage.setItem('theme', 'light')
        theme.href = 'css/light-theme.css'
        themeIcon.setAttribute('src', 'img/moon.png')

    }
}

if (localStorage.getItem('theme') == 'dark') {
    theme.href = 'css/dark-theme.css'
    themeIcon.setAttribute('src', 'img/sun.png')
} else {
    theme.href = 'css/light-theme.css'
    themeIcon.setAttribute('src', 'img/moon.png')

}

let toTopBtn = document.querySelector(".to-top");

function scrollForBtn() {
    if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
        toTopBtn.style.opacity = 1
    } else {
        toTopBtn.style.opacity = 0
    }
}

window.onscroll = scrollForBtn

function toTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

let modal = document.querySelector('.modal')
let overlay = document.querySelector('.overlay')

function handleModal() {
    modal.style.display = 'block'
    overlay.style.display = 'block'
}

function modalClose() {
    modal.style.display = 'none'
    overlay.style.display = 'none'
}

document.querySelector('.btn.modal-close').onclick = modalClose
document.querySelector('.modal-header .close').onclick = modalClose

overlay.onclick = modalClose

function handleBuy() {
    let qty = document.querySelector('[name="qty"').value
    if (!qty || qty < 0) return false
    let flavour;
    for (var radio of document.querySelectorAll('[name="flavour"]')) {
        if (radio.checked) {
            flavour = radio.value
        }
    }
    if (!flavour) return false
    alert(`Покупка успешно совершена!`)
}


let products = {
    proteins: [
        {
            img: "https://www.brutalshop.ru/upload/resize_cache/iblock/0f4/220_200_1/i9rprz522xlw6brhnq8ddafdcs52y1bs.jpeg",
            title: "ON 100% Whey Protein, 2270 гр. / Optimum Nutrition",
            price: "8 950 руб.",
            added: "2022/11/19"
        },
        {
            img: "https://www.brutalshop.ru/upload/resize_cache/iblock/e79/220_200_1/5ulhy0s73p6cwpspxj3gmf5kmovbvbto.jpg",
            title: "RPS Whey Protein, 500 гр. / Russian Performance Standard (RPS)",
            price: "1 150 руб.",
            added: "2022/10/15"
        },
        {
            img: "https://www.brutalshop.ru/upload/resize_cache/iblock/1e4/220_200_1/mzsqhsla59j0n2mx4ibczpzcw818goa9.jpeg",
            title: "Maxler 100% Golden Whey, 908 гр. / Maxler",
            price: "3 180 руб.",
            added: "2022/8/16"
        },
        {
            img: "https://www.brutalshop.ru/upload/resize_cache/iblock/4e7/220_200_1/nx1ibrnvj19p765g19ejycepjaa8hatm.jpg",
            title: "Atlecs Whey Protein 454 g, / Atlecs",
            price: "1 692 руб.",
            added: "2022/0/5"
        },
        {
            img: "https://www.brutalshop.ru/upload/resize_cache/iblock/fa3/220_200_1/fa3a96de8a4773ea8cbf1eeb1ecbabc5.jpg",
            title: "R-LINE Whey, 1000 гр. / R-LINE",
            price: "1 690 руб.",
            added: "2022/10/8"
        },
        {
            img: "https://www.brutalshop.ru/upload/resize_cache/iblock/e4f/220_200_1/j04f8x8c3jh67078cwimpjf2g755hhc4.jpg",
            title: "Maxler 100% Golden Whey, 2270 гр. / Maxler",
            price: "6 490 руб.",
            added: "2022/4/20"
        },
        {
            img: "https://www.brutalshop.ru/upload/resize_cache/iblock/77d/220_200_1/77dc363c3c094d86e2b0ca0c49370c38.png",
            title: "R-LINE Whey, 1700 гр. / R-LINE",
            price: "2 970 руб.",
            added: "2022/6/8"
        },
        {
            img: "https://www.brutalshop.ru/upload/resize_cache/iblock/88f/220_200_1/yhn4mkzebaitmd5qeu5nilk0h3cr46co.jpg",
            title: "RPS Whey Protein, 908 гр / Russian Performance Standard (RPS)",
            price: "2 050 руб.",
            added: "2022/9/4"
        },
        {
            img: "https://www.brutalshop.ru/upload/resize_cache/iblock/5aa/220_200_1/9mh6rrj595odjh5fhq3n6f0389j4l6x0.jpg",
            title: "RPS Whey Protein, 2270 гр. / Russian Performance Standard (RPS)",
            price: "4 580 руб.",
            added: "2022/6/15"
        },
        {
            img: "https://www.brutalshop.ru/upload/resize_cache/iblock/418/220_200_1/418caf84d154f15b5bf44212f1a68f1a.jpg",
            title: "VP 100% Platinum Whey, 750 гр. / VPLab Nutrition",
            price: "3 920 руб.",
            added: "2022/6/1"
        },
        {
            img: "https://www.brutalshop.ru/upload/resize_cache/iblock/b90/220_200_1/70p38hq6379b6ao1agsothd1p6e946bz.jpeg",
            title: "LevelUp 100% Whey, 2270 гр. / Level Up",
            price: "5 987 руб.",
            added: "2022/6/18"
        },
        {
            img: "https://www.brutalshop.ru/upload/resize_cache/iblock/769/220_200_1/ec99z0u24a80pf2h4koz86l9c91ddwg6.jpeg",
            title: "Cybermass Whey, 2270 g / Cybermass",
            price: "4 495 руб.",
            added: "2022/7/10"
        },
        {
            img: "https://www.brutalshop.ru/upload/resize_cache/iblock/470/220_200_1/4824b7sxvmgmc14hc95cr4mjbxny286t.jpeg",
            title: "Fit Foods Mutant Whey, 2270 гр. / Fit Foods",
            price: "6 170 руб.",
            added: "2022/0/13"
        },
        {
            img: "https://www.brutalshop.ru/upload/resize_cache/iblock/b34/220_200_1/atzeb6bqrvmm6m4ctd60qqtg9wj7ypaz.JPG",
            title: "QNT Delicious Whey Protein, 908 гр. / QNT",
            price: "3 460 руб.",
            added: "2022/3/20"
        },
        {
            img: "https://www.brutalshop.ru/upload/resize_cache/iblock/e59/220_200_1/ku7i7x6lwccajegm1syp9nb43908wr4m.jpeg",
            title: "RPS Whey Protein, 1000 гр, / Russian Performance Standard (RPS)",
            price: "2 150 руб.",
            added: "2022/1/20"
        },
        {
            img: "https://www.brutalshop.ru/upload/resize_cache/iblock/e4e/220_200_1/rbaqlb8egvs4cpd5xkqlb6nkurck3den.jpeg",
            title: "R-LINE Whey, 900 гр. / R-LINE",
            price: "1 690 руб.",
            added: "2022/10/20"
        },
        {
            img: "https://www.brutalshop.ru/upload/resize_cache/iblock/6c5/220_200_1/mnx2tccctkv7965tcrmvc6l4ahse6cvm.jpeg",
            title: "R-LINE Whey, 4000 гр. / R-LINE",
            price: "6 710 руб.",
            added: "2022/6/19"
        },
        {
            img: "https://www.brutalshop.ru/upload/resize_cache/iblock/56a/220_200_1/56a2b50794b28f2c0c51c24ec515c112.jpg",
            title: "Cybermass Whey, 908 гр. / Cybermass",
            price: "2 290 руб.",
            added: "2022/3/17"
        },
        {
            img: "https://www.brutalshop.ru/upload/resize_cache/iblock/b67/220_200_1/bv7sj9v8upd4zvfw0u6z4rcezu2d2ax7.jpeg",
            title: "LevelUp 100% Whey, 454 гр. / Level Up",
            price: "1 417 руб.",
            added: "2022/4/9"
        },
        {
            img: "https://www.brutalshop.ru/upload/resize_cache/iblock/2b2/220_200_1/ytchy3l0l1ntp9d9p9z9l2pjmyf5082x.jpg",
            title: "Atlecs Whey Protein 908 g, / Atlecs",
            price: "2 967 руб.",
            added: "2022/11/16"
        },
        {
            img: "https://www.brutalshop.ru/upload/resize_cache/iblock/b13/220_200_1/k2uij2m36ejdok0deb15532oib5ds47m.jpeg",
            title: "QNT Delicious Whey Protein, 2200 гр. / QNT",
            price: "8 170 руб.",
            added: "2022/4/16"
        },
        {
            img: "https://www.brutalshop.ru/upload/resize_cache/iblock/e60/220_200_1/4bzcguum91e9bsn4uj1zbm36p65yskcx.jpg",
            title: "DAB Whey protein, 480 g / DAB",
            price: "1 607 руб.",
            added: "2022/1/20"
        },
        {
            img: "https://www.brutalshop.ru/upload/resize_cache/iblock/a79/220_200_1/239wfkms8n9uevnl1pezt2feuroq22gm.jpg",
            title: "Fit Foods Mutant Whey, 4540 g / Fit Foods",
            price: "9 988 руб.",
            added: "2022/5/4"
        },
        {
            img: "https://www.brutalshop.ru/upload/resize_cache/iblock/a5e/220_200_1/dq9j5wahr8lv5sqbkqdhwc513unxusqt.jpg",
            title: "DAB Whey protein 900 g / DAB",
            price: "2 797 руб.",
            added: "2022/7/11"
        },
        {
            img: "https://www.brutalshop.ru/upload/resize_cache/iblock/3e3/220_200_1/j0ct69q2ablyreddb9p9cfzca246l6ez.jpg",
            title: "Maxler Ultra Whey Protein, 750 гр. / Maxler",
            price: "2 860 руб.",
            added: "2022/4/12"
        },
        {
            img: "https://www.brutalshop.ru/upload/resize_cache/iblock/4d2/220_200_1/t57up44af3ax7s3clrygjanjfvmd0aoj.webp",
            title: "R-LINE Power Whey, 1700 g / R-LINE",
            price: "3 450 руб.",
            added: "2022/5/12"
        },
        {
            img: "https://www.brutalshop.ru/upload/resize_cache/iblock/def/220_200_1/vpx21ftu2carkj1vcpfh2n8m9cbxjvpp.png",
            title: "QNT Whey Protein Light Digest, 500 g / QNT",
            price: "1 849 руб.",
            added: "2022/11/6"
        },
    ],
    gainers: [
        {
            img: "https://www.brutalshop.ru/upload/resize_cache/iblock/39a/220_200_1/vcvmmhhd4ml82x060kuq61up4cu0aqml.jpg",
            title: "Cybermass Gainer, 1500 гр. / Cybermass",
            price: "1 465 руб.",
            added: "2022/2/5"
        },
        {
            img: "https://www.brutalshop.ru/upload/resize_cache/iblock/098/220_200_1/0983b097785b34605d56dd0fef0ee47f.jpg",
            title: "RPS Premium Mass Gainer, 2268 гр. / Russian Performance Standard (RPS)",
            price: "2 200 руб.",
            added: "2022/3/19"
        },
        {
            img: "https://www.brutalshop.ru/upload/resize_cache/iblock/229/220_200_1/22941ba46b2172cf10abd132b4132805.jpg",
            title: "Cybermass Gainer, 3000 g / Cybermass",
            price: "2 450 руб.",
            added: "2022/5/12"
        },
        {
            img: "https://www.brutalshop.ru/upload/resize_cache/iblock/bc3/220_200_1/bc34cfa6f0d577babdf02459304df86f.jpg",
            title: "RPS Premium Mass Gainer, 2268 гр. / Russian Performance Standard (RPS)",
            price: "2 200 руб.",
            added: "2022/3/4"
        },
        {
            img: "https://www.brutalshop.ru/upload/resize_cache/iblock/4e4/220_200_1/1yol9it4kzdd676vv1iprevo0yojrioe.jpeg",
            title: "BioTech Hyper Mass 5000, 1000 гр. / BioTech",
            price: "1 080 руб.",
            added: "2022/2/2"
        },
        {
            img: "https://www.brutalshop.ru/upload/resize_cache/iblock/c54/220_200_1/z7oxlgrcly8hp2w5gz8lpa8snmwoo3ln.jpeg",
            title: "BioTech Hyper Mass 5000, 4000 g / BioTech",
            price: "4 462 руб.",
            added: "2022/11/12"
        },
        {
            img: "https://www.brutalshop.ru/upload/resize_cache/iblock/db6/220_200_1/qbt2ueofkc4yi6eny0eb47r4fbna9jr7.jpeg",
            title: "RPS Premium Mass Gainer, 4540 гр. / Russian Performance Standard (RPS)",
            price: "3 322 руб.",
            added: "2022/7/9"
        },
        {
            img: "https://www.brutalshop.ru/upload/resize_cache/iblock/36a/220_200_1/hvn3ah24vkdoqu0r409lvc2f82elpxw7.jpeg",
            title: "BioTech Hyper Mass 5000, 2270 g / BioTech",
            price: "3 300 руб.",
            added: "2022/3/2"
        },
        {
            img: "https://www.brutalshop.ru/upload/resize_cache/iblock/037/220_200_1/i5kx83r28sy8eyd0ymzmw04m42jlx72t.jpeg",
            title: "QNT Metapure Mass+, 1815 гр. / QNT",
            price: "3 890 руб.",
            added: "2022/7/6"
        },
        {
            img: "https://www.brutalshop.ru/upload/resize_cache/iblock/989/220_200_1/ypk7qa5e4qhsj8tddgztfllkghqgfkty.jpeg",
            title: "Gold Standard Gainer, 4670 g / Optimum Nutrition",
            price: "9 080 руб.",
            added: "2022/7/15"
        },
        {
            img: "https://www.brutalshop.ru/upload/resize_cache/iblock/509/220_200_1/pnct397z2n0l8nyn836fa1qyjgchw1yu.jpeg",
            title: "RPS Premium Mass Gainer + Creatine, 2268 g, / Russian Performance Standard (RPS)",
            price: "2 211 руб.",
            added: "2022/5/4"
        },
        {
            img: "https://www.brutalshop.ru/upload/resize_cache/iblock/c33/220_200_1/iuft8h6jmf7ga1znvbzt4vqjyfc4ouos.jpeg",
            title: "Gold Standard Gainer, 2270 g / Optimum Nutrition",
            price: "4 800 руб.",
            added: "2022/4/11"
        },
        {
            img: "https://www.brutalshop.ru/upload/resize_cache/iblock/b6a/220_200_1/zsf8cffp3ohmdgfzi10g6ftgcnaqtgnb.jpeg",
            title: "Up Your Mass, 4540 g / MHP",
            price: "7 650 руб.",
            added: "2022/10/2"
        },
        {
            img: "https://www.brutalshop.ru/upload/resize_cache/iblock/e3d/220_200_1/of0ki9ybw5rxiegp7gt9lzazmtfpr20c.jpeg",
            title: "Elite Mass Gainer, 2722 g / Dymatize",
            price: "4 590 руб.",
            added: "2022/8/17"
        },
        {
            img: "https://www.brutalshop.ru/upload/resize_cache/iblock/5b5/220_200_1/7r2aewpchl6pmm2qt1n2s6cai7ou1sqw.jpeg",
            title: "Pro Complex Gainer, 4620 g / Optimum Nutrition",
            price: "8 480 руб.",
            added: "2022/7/2"
        },
        {
            img: "https://www.brutalshop.ru/upload/resize_cache/iblock/ca9/220_200_1/7vbokt8d3rolhov3cahecechnuimp3nr.jpeg",
            title: "Pro Complex Gainer, 2310 g / Optimum Nutrition",
            price: "5 780 руб.",
            added: "2022/4/19"
        },
        {
            img: "https://www.brutalshop.ru/upload/resize_cache/iblock/6de/220_200_1/o3mjhb3prm3jxv93r3t60uetyvk83xoc.png",
            title: "Titan Weight Gainer, 7000 g / Soul Project",
            price: "6 440 руб.",
            added: "2022/11/5"
        },
        {
            img: "https://www.brutalshop.ru/upload/resize_cache/iblock/0a4/220_200_1/bmcamdvkghkayd2d751o2506rqmu1mgr.jpeg",
            title: "Up Your Mass, 2270 g / MHP",
            price: "3 830 руб.",
            added: "2022/2/19"
        },
        {
            img: "https://www.brutalshop.ru/upload/resize_cache/iblock/98c/220_200_1/gwezm1bmsuup7f5lnlmjlxdox6qn872y.jpeg",
            title: "Gain Pro, 2722 g / MEX",
            price: "4 040 руб.",
            added: "2022/9/19"
        },
        {
            img: "https://www.brutalshop.ru/upload/resize_cache/iblock/4b9/220_200_1/xwamx2hwdbeopqfcjy6upnffc19tzimg.jpeg",
            title: "QNT Metapure Mass+, 2500 g / QNT",
            price: "4 790 руб.",
            added: "2022/10/4"
        },
        {
            img: "https://www.brutalshop.ru/upload/resize_cache/iblock/2ab/220_200_1/2b7t24hcby87gngks6fneaebr3dvosdm.jpeg",
            title: "Hyper Mass, 6800 g / BioTech",
            price: "7 800 руб.",
            added: "2022/5/13"
        },
        {
            img: "https://www.brutalshop.ru/upload/resize_cache/iblock/71b/220_200_1/ica9b4np8tystkjlmq5keacm93aru4y3.jpeg",
            title: "Iron Mass Arnold Series, 2270 g / MusclePharm",
            price: "4 980 руб.",
            added: "2022/11/1"
        },
        {
            img: "https://www.brutalshop.ru/upload/resize_cache/iblock/328/220_200_1/pq2e29sof4tc0axflazj7bigupe28ava.jpeg",
            title: "Гейнер 30. 1000 g / Power Pro",
            price: "1 130 руб.",
            added: "2022/5/12"
        },
        {
            img: "https://www.brutalshop.ru/upload/resize_cache/iblock/9da/220_200_1/mzpb4l1j3dauw27lqysythackxwqzqzc.jpeg",
            title: "Myprotein Impact Weight Gainer V2, 2500 g / Myprotein",
            price: "3 140 руб.",
            added: "2022/0/5"
        },
        {
            img: "https://www.brutalshop.ru/upload/resize_cache/iblock/dd7/220_200_1/bmg3hzmp5s7pv0huyx2vwp6dtu29y5f6.jpeg",
            title: "R1 Gain, 4640 g / Rule1",
            price: "9 230 руб.",
            added: "2022/10/16"
        }
    ],
    aminos: [
        {
            img: "https://www.brutalshop.ru/upload/resize_cache/iblock/1b3/220_200_1/w3eblsfakdyzsfijffy5jc97odfxvvjo.jpg",
            title: "Atlecs BCAA 2.1.1, 250 g, / Atlecs",
            price: "1 267 руб.",
            added: "2022/7/12"
        },
        {
            img: "https://www.brutalshop.ru/upload/resize_cache/iblock/8fe/220_200_1/g8p0gt674xdov53pdncamjl6t8tqoavr.png",
            title: "RPS BCAA++, 500 g / Russian Performance Standard (RPS)",
            price: "1 638 руб.",
            added: "2022/11/11"
        },
        {
            img: "https://www.brutalshop.ru/upload/resize_cache/iblock/818/220_200_1/k0sqv198qakutqvvvm9uky0ryylh20hd.jpeg",
            title: "Ultimate Nutrition BCAA Powder 12,000 Flavor, 400 g / Ultimate Nutrition",
            price: "2 545 руб.",
            added: "2022/1/19"
        },
        {
            img: "https://www.brutalshop.ru/upload/resize_cache/iblock/6ea/220_200_1/g1dvvozzx7dow0oksqqijq5ekk5e4uwc.jpeg",
            title: "LevelUp Aminoblast BCAA Powder, 500 g / Level Up",
            price: "1 775 руб.",
            added: "2022/4/5"
        },
        {
            img: "https://www.brutalshop.ru/upload/resize_cache/iblock/0ef/220_200_1/16394r032o233f5nkihj03bwpi913pw6.jpg",
            title: "Atlecs BCAA 2.1.1, 500 g, / Atlecs",
            price: "2 287 руб.",
            added: "2022/7/4"
        },
        {
            img: "https://www.brutalshop.ru/upload/resize_cache/iblock/e94/220_200_1/t5qrx82zzzfy6wyinxj1ctntkpbsbztp.png",
            title: "RPS Nutrition BCAA+, 200 g / Russian Performance Standard (RPS)",
            price: "850 руб.",
            added: "2022/5/18"
        },
        {
            img: "https://www.brutalshop.ru/upload/resize_cache/iblock/42d/220_200_1/z9ksmiaeu7wkho80rx8rdxc4ab6036e2.jpeg",
            title: "Alex Fedorov Nutrition BCAA 7500, 300 g / Alex Fedorov Nutrition",
            price: "1 690 руб.",
            added: "2022/8/11"
        },
        {
            img: "https://www.brutalshop.ru/upload/resize_cache/iblock/351/220_200_1/351d84740ee9a963428c1292596fa8ab.png",
            title: "Maxler BCAA Powder 2:1:1, 1000 g / Maxler",
            price: "3 350 руб.",
            added: "2022/7/12"
        },
        {
            img: "https://www.brutalshop.ru/upload/resize_cache/iblock/dfd/220_200_1/ra0p15orgu84f3mdqft6gikvgx0kve5a.jpeg",
            title: "R-LINE BCAA, 200 caps / R-LINE",
            price: "810 руб.",
            added: "2022/10/6"
        },
        {
            img: "https://www.brutalshop.ru/upload/resize_cache/iblock/49b/220_200_1/ec46ruk24ua1iltcvn5s1cewf6jplafp.jpeg",
            title: "Scitec Nutrition BCAA Express, 700 g / Scitec Nutrition",
            price: "3 290 руб.",
            added: "2022/2/19"
        },
        {
            img: "https://www.brutalshop.ru/upload/resize_cache/iblock/d02/220_200_1/yph6x6gc7nhpoy2gl4sllry2318t3wlx.jpeg",
            title: "Cybermass BCAA 1200, 120 caps / Cybermass",
            price: "675 руб.",
            added: "2022/4/14"
        },
        {
            img: "https://www.brutalshop.ru/upload/resize_cache/iblock/ef7/220_200_1/ifb5y54rlozl5thaumyagkadcq4wyt11.jpg",
            title: "Maxler BCAA Powder 2:1:1 Sugar Free, 420 g / Maxler",
            price: "1 770 руб.",
            added: "2022/7/7"
        },
        {
            img: "https://www.brutalshop.ru/upload/resize_cache/iblock/920/220_200_1/7ewzobq6f5zwqzx2v9pl3e6rd2izr41n.png",
            title: "Atlecs BCAA 2.1.1, 360 caps / Atlecs",
            price: "1 743 руб.",
            added: "2022/9/3"
        },
        {
            img: "https://www.brutalshop.ru/upload/resize_cache/iblock/cc2/220_200_1/cr7y930jkdy8b6b01817n204ke5o9gyi.jpeg",
            title: "Cybermass BCAA 8:1:1 + Glutamine, 220 g / Cybermass",
            price: "850 руб.",
            added: "2022/1/6"
        },
        {
            img: "https://www.brutalshop.ru/upload/resize_cache/iblock/832/220_200_1/gnwax5hcry8e4k29zxga6ok1fih8nlih.jpg",
            title: "VP BCAA 8-1-1, 300 g / VPLab Nutrition",
            price: "2 270 руб.",
            added: "2022/6/17"
        },
        {
            img: "https://www.brutalshop.ru/upload/resize_cache/iblock/fb4/220_200_1/gl7zbn8mfk9wdgw4t5p1m0fzboy424x7.jpg",
            title: "Maxler BCAA + Glutamine 300 g / Maxler",
            price: "1 540 руб.",
            added: "2022/8/10"
        },
        {
            img: "https://www.brutalshop.ru/upload/resize_cache/iblock/80c/220_200_1/k9wz7zrt6qnmry75pjvjjibmvrgo14fy.jpeg",
            title: "Optimum Nutrition BCAA 1000, 400 caps / Optimum Nutrition",
            price: "4 190 руб.",
            added: "2022/7/9"
        },
        {
            img: "https://www.brutalshop.ru/upload/resize_cache/iblock/b50/220_200_1/5z0dk53yd91wqerfebmszs552019vgyq.jpg",
            title: "VP BCAA 2-1-1, 300 g / VPLab Nutrition",
            price: "2 110 руб.",
            added: "2022/7/7"
        },
        {
            img: "https://www.brutalshop.ru/upload/resize_cache/iblock/37c/220_200_1/kqx20mcsaum5xkxpd5uoe1nsr2yvh8fy.jpeg",
            title: "Scitec Nutrition BCAA Express, 280 g / Scitec Nutrition",
            price: "1 575 руб.",
            added: "2022/6/18"
        },
        {
            img: "https://www.brutalshop.ru/upload/resize_cache/iblock/273/220_200_1/67fjesj59se2qo8ay35fm0cd6v650ig8.jpeg",
            title: "LevelUp BCAA Pump, 250 g / Level Up",
            price: "970 руб.",
            added: "2022/1/16"
        }
    ],
    vitamins: [
        {
            img: "https://www.brutalshop.ru/upload/resize_cache/iblock/a0a/220_200_1/30nc0berd57o3z9zrqytkypmuslececn.jpeg",
            title: "Universal Nutrition Animal PAK, 44 пакетика / Universal Nutrition",
            price: "5 250 руб.",
            added: "2022/7/2"
        },
        {
            img: "https://www.brutalshop.ru/upload/resize_cache/iblock/934/220_200_1/jyb3hiubc1f1bu9xj5xil3r50b1ex0m0.jpeg",
            title: "Maxler DMAE 250 mg, 100 caps / Maxler",
            price: "1 110 руб.",
            added: "2022/5/3"
        },
        {
            img: "https://www.brutalshop.ru/upload/resize_cache/iblock/73e/220_200_1/a3g2xkrh3m7xcaacv82teyt187odcto0.jpeg",
            title: "Universal Nutrition Daily Formula, 100 tabs / Universal Nutrition",
            price: "1 590 руб.",
            added: "2022/10/20"
        },
        {
            img: "https://www.brutalshop.ru/upload/resize_cache/iblock/702/220_200_1/obt3a8g2yxexflo0ijlu71g82gsr72vr.png",
            title: "Algorithm Multi Max, 140 tabs / Algorithm",
            price: "2 083 руб.",
            added: "2022/1/7"
        },
        {
            img: "https://www.brutalshop.ru/upload/resize_cache/iblock/29b/220_200_1/gnnbsj7po70fa3jyfva91cspph6oxl1a.jpeg",
            title: "Cybermass Multivitamin Daily, 90 caps / Cybermass",
            price: "550 руб.",
            added: "2022/3/3"
        },
        {
            img: "https://www.brutalshop.ru/upload/resize_cache/iblock/8c6/220_200_1/b6lx7hsnexc5j4qmtixrpgr4w1nqohyh.jpeg",
            title: "VP Daily 1, 100 caps / VPLab Nutrition",
            price: "1 270 руб.",
            added: "2022/8/18"
        },
        {
            img: "https://www.brutalshop.ru/upload/resize_cache/iblock/245/220_200_1/uatt749791ey4l1a21jbzxeznqgt02kg.jpeg",
            title: "Maxler Daily Max, 60 tabs / Maxler",
            price: "890 руб.",
            added: "2022/8/17"
        },
        {
            img: "https://www.brutalshop.ru/upload/resize_cache/iblock/764/220_200_1/6qttn765vyap06yekogio7bw3hs1zpns.png",
            title: "BioTechUSA Vitabolic 30 tabs / BioTech",
            price: "870 руб.",
            added: "2022/6/2"
        },
        {
            img: "https://www.brutalshop.ru/upload/resize_cache/iblock/b73/220_200_1/2d8eyeux7vs3e4x22i7q0eiz7cd09qbc.jpg",
            title: "Algorithm Multi Max, 60 tabs / Algorithm",
            price: "1 096 руб.",
            added: "2022/4/3"
        },
        {
            img: "https://www.brutalshop.ru/upload/resize_cache/iblock/64c/220_200_1/xisdam8x2avum6z3puf9wwd4p9qccrab.png",
            title: "R-LINE Multivitamin Daily 60 tab / R-LINE",
            price: "500 руб.",
            added: "2022/8/12"
        },
        {
            img: "https://www.brutalshop.ru/upload/resize_cache/iblock/616/220_200_1/tdkc08jdqd6q0jx0zj1gkizvj4i4j7wq.jpeg",
            title: "NOW A & D 10000/400 IU, 100 softgels / Now",
            price: "810 руб.",
            added: "2022/2/2"
        },
        {
            img: "https://www.brutalshop.ru/upload/resize_cache/iblock/55b/220_200_1/iwxzv3z9pwmy7b7v5uoxm2hi29iuo59p.jpg",
            title: "NOW Alpha Lipoic Acid, 120 caps / Now",
            price: "1 890 руб.",
            added: "2022/2/4"
        },
        {
            img: "https://www.brutalshop.ru/upload/resize_cache/iblock/3c8/220_200_1/04d3vfupifov2nb2umkawflkut1p0ya1.png",
            title: "BioTechUSA One-a-Day, 100 tabs / BioTech",
            price: "1 120 руб.",
            added: "2022/9/4"
        },
        {
            img: "https://www.brutalshop.ru/upload/resize_cache/iblock/4fd/220_200_1/7nie7igyg3xwdz0qb6p9ypaejt2qcn6h.jpeg",
            title: "Swiss Energy Multivitamins+Biotin, 20 tabs / Swiss Energy",
            price: "450 руб.",
            added: "2022/7/7"
        },
        {
            img: "https://www.brutalshop.ru/upload/resize_cache/iblock/f1e/220_200_1/830qo72qn5yxv4hswu1g2i8hkzlom1p7.jpeg",
            title: "Animal PAK, 30 pack / Universal Nutrition",
            price: "3 450 руб.",
            added: "2022/6/5"
        },
        {
            img: "https://www.brutalshop.ru/upload/resize_cache/iblock/eb5/220_200_1/ulvb4rxqdwj6axr2rxndumrq5t3ag3o3.jpeg",
            title: "Maxler Daily Max, 100 tabs / Maxler",
            price: "870 руб.",
            added: "2022/4/8"
        },
        {
            img: "https://www.brutalshop.ru/upload/resize_cache/iblock/051/220_200_1/cnwlpby9o7abypslsmhh5kuirppb31ns.jpeg",
            title: "Swiss Energy Active, 20 tabs / Swiss Energy",
            price: "350 руб.",
            added: "2022/9/15"
        },
        {
            img: "https://www.brutalshop.ru/upload/resize_cache/iblock/447/220_200_1/2kbo39ygvsw71xod9mzkame2pwylpekl.jpeg",
            title: "Prime Kraft Vitamax, 90 tabs / PRIME KRAFT",
            price: "1 040 руб.",
            added: "2022/2/11"
        },
        {
            img: "https://www.brutalshop.ru/upload/resize_cache/iblock/5a7/220_200_1/do0t0zbwb2aecr4r8kwcgq1me2k9v6ad.jpeg",
            title: "NOW Alpha Lipoic Acid, 100 mg, 60 vcaps / Now",
            price: "980 руб.",
            added: "2022/3/12"
        },
        {
            img: "https://www.brutalshop.ru/upload/resize_cache/iblock/9f8/220_200_1/j44crb2des7eyg4t9xld46jeeorb6cir.jpeg",
            title: "Multi PRO, 30 packets / Scitec Nutrition",
            price: "2 470 руб.",
            added: "2022/1/3"
        },
        {
            img: "https://www.brutalshop.ru/upload/resize_cache/iblock/c2e/220_200_1/kgook26v9znrsym572sqpxn3risq8y1l.jpeg",
            title: "Swiss Energy Anti Age, 20 tabs / Swiss Energy",
            price: "450 руб.",
            added: "2022/3/8"
        },
        {
            img: "https://www.brutalshop.ru/upload/resize_cache/iblock/d0e/220_200_1/ggu4hq8ayyxnn92q5xb0d5cz6vqju16v.jpeg",
            title: "Animal PAK, 15 пакетиков / Universal Nutrition",
            price: "2 030 руб.",
            added: "2022/1/11"
        },
        {
            img: "https://www.brutalshop.ru/upload/resize_cache/iblock/59b/220_200_1/ss23pntz7ktfubzdp6lcdwfg13zvb6hq.jpeg",
            title: "Vitamin D3 1200 IU, 360 tabs / Maxler",
            price: "1 200 руб.",
            added: "2022/9/20"
        },
        {
            img: "https://www.brutalshop.ru/upload/resize_cache/iblock/a71/220_200_1/gnt4bswjp594d0h9kh6diez3lebo6end.jpeg",
            title: "Daily One Caps, 60 caps / Twinlab",
            price: "1 340 руб.",
            added: "2022/7/13"
        }
    ]
}

function getDayInfo(dateStr) {
    let date = new Date(dateStr)
    let output = ''
    let week = date.toLocaleDateString('RU', { weekday: 'long' })
    week = week.charAt(0).toUpperCase() + week.slice(1)
    let day = date.getDate()
    let numberOfWeek = Math.ceil(day / 7)
    let month = date.toLocaleDateString('RU', { month: 'long' })
    month = month.charAt(0).toUpperCase() + month.slice(1)
    month = month.replace(/.$/, 'я');
    let year = date.getFullYear()
    output = `${week}, ${numberOfWeek} неделя ${month} ${year} года`
    return output
}

function fillProducts(products) {
    for (let product of products) {
        let procuctCard = document.querySelector('.product_card').cloneNode(true)
        procuctCard.style.display = 'grid'
        procuctCard.querySelector('img').src = product.img
        procuctCard.querySelector('.title').innerHTML = product.title
        procuctCard.querySelector('.added').innerHTML = getDayInfo(product.added)
        procuctCard.querySelector('.price').innerHTML = product.price
        document.querySelector('.products_wrapper').append(procuctCard)
        procuctCard.style.opacity = 0
        setTimeout(() => procuctCard.style.opacity = 1, 100)
    }
}

if (window.location.href.includes('proteins')) {
    fillProducts(products.proteins)
} else if (window.location.href.includes('gainers')) {
    fillProducts(products.gainers)
} else if (window.location.href.includes('aminos')) {
    fillProducts(products.aminos)
} else if (window.location.href.includes('vitamins')) {
    fillProducts(products.vitamins)
}

const toggle = document.querySelector('.toggle')
const navbarLinks = document.querySelector('.navbar-links')

toggle.onclick = () => { navbarLinks.classList.toggle('active') }