document.addEventListener('DOMContentLoaded', function() {
    var calendarEl = document.getElementById('calendario');

    var calendar = new FullCalendar.Calendar(calendarEl, {
      plugins: [ 'dayGrid'],
      locale: 'es',
      events: [
            {
                title: 'Java desde 0',
                start: '2023-06-26',
            },
            {
                title: 'React JS',
                start: '2023-06-30',
            },
            {
                title: 'Angular',
                start: '2023-06-23',
            },
            {
                title: 'Wordpress',
                start: '2023-06-27'
            }
        ]
    }); 

    calendar.render();
  });

  /*.libreria({
    opcion:valor,
    opcion2:valor,
    opcionConOpciones:[
        {
            opcionInterna:valor,
            opcionInternaUltima:valor
        },
        {
            opcionInterna:valor
        }
    ],
    opcionUltima:valor
  })*/