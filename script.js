let mydiv = $('.info_block');
let text = mydiv.text();
let width = mydiv.width();
let text2 = $('.info_block_desc .info_p').text();
if(width < 600) {
  text2 = '';
  text2 = 'Будучи нашим гостем, Вы погружаетесь в атмосферу гармонии и блаженства от отдыха. Изящный интерьер,';
  text2 += ' декорированный в неповторимом восточном стиле с использованием натуральных, '; text2 += 'экологически-чистых материалов, ' ;
  text2 += 'расслабляющая музыка и мастерство наших специалистов — вот рецепт '; 
  text2 += ' умиротворенности и спокойной радости от ';
  text2 +=  ' лучшего спа центра SpaRoses.';
  text2 = $('.info_block_desc .info_p').text(text2);
  console.log(text2);
}

