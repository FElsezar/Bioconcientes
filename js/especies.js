export default {
    data() {
      return {
        currentDate: new Date(),
        speciesList: [
            {
                name: 'Guanaco',
                nameSc: 'Lama guanicoe',
                description: 'El guanaco es uno de los grandes herbívoros de Sudamérica y el mayor de los camélidos silvestres de este continente. Esta especie manifiesta una serie de adaptaciones anatómicas y fisiológicas que le permiten sobrevivir en condiciones extremas (Raedeke, 1978; Franklin 1983; Puig, 1995a; De Lamo, 1997; De Lamo et al., 1998). Debido a su adaptabilidad a distintas condiciones, y especialmente por su forma de alimentación, el guanaco ocupa hábitats con marcadas diferencias en estructura de la vegetación, relieve, clima y presencia de actividades humanas',
                status: 'Las poblaciones de guanacos en Argentina declinaron continuamente desde la colonización europea hasta nuestros días. <br> Los principales factores vinculados a esta reducción poblacional se relacionan con la alteración del hábitat, la competencia por introducción de ganado ovino, la caza indiscriminada -legal e ilegal- y la carencia de planes de protección y manejo que asegurasen su conservación. <br> El manejo de guanacos en forma sustentable puede implicar cambios positivos para el futuro de la especie, históricamente declinante. Los beneficios obtenidos pueden favorecer una percepción positiva hacia la especie, que ayude a detener su declinación e incluso, recuperar zonas de su distribución original. <br> Se estima que a fines del siglo XIX la población total de guanacos estaba en el orden de los 7 millones de individuos (Cabrera y Yepes, 1960; Torres, 1985). Hoy, la Unión Internacional para la Conservación de la Naturaleza (UICN) estima que la población total no superaría los 600.000 individuos. Un relevamiento aéreo realizado en el año 2000, estimó una población mínima de 402.000 animales para la Patagonia continental, -en las provincias de Neuquen, Río Negro, Chubut y Santa Cruz- (Amaya et al., 2001).',
                photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Guanaco_centro_de_ski_La_Hoya.jpg/800px-Guanaco_centro_de_ski_La_Hoya.jpg'
            },
            {
                name: 'Cauquén colorado',
                nameSc: 'Chloephaga rubidiceps',
                description: 'El guanaco es uno de los grandes herbívoros de Sudamérica y el mayor de los camélidos silvestres de este continente. Esta especie manifiesta una serie de adaptaciones anatómicas y fisiológicas que le permiten sobrevivir en condiciones extremas (Raedeke, 1978; Franklin 1983; Puig, 1995a; De Lamo, 1997; De Lamo et al., 1998). Debido a su adaptabilidad a distintas condiciones, y espEs un ave migratoria que habita en la región el patagónica de Argentina y Chile y, que entre mayo y septiembre viaja hasta el sur de la provincia de Buenos Aires, donde tiene su área de invernada. Actualmente se halla en peligro de extinción, siendo su población estimada inferior a 900 individuos. Fue declarado como Monumento Natural bajo la Ley nº 12.250. <br> El cauquén colorado o avutarda (Chloephaga rubidiceps) es un ave de la familia de los patos que habita pastizales y zonas abiertas. Se alimentan de vegetación natural tierna. <br> Externamente puede reconocérselo por su cabeza y cuello castaños en la parte superior, periocular blanco, frente recta, parte ventral grisácea con finas bandas negras transversales y patas anaranjadas.<br> Realiza grandes movimientos migratorios desde el sur de la Argentina y Chile hacia el sudoeste de la Provincia de Buenos Aires. Entre abril y mayo llega a la zona de invernada, ubicada en sectores de los partidos de San Cayetano, Tres Arroyos y Coronel Dorrego.  Luego, entre julio y agosto, retorna al sur patagónico donde se reproduce. En estas migraciones forma bandadas mixtas junto con el cauquén común y el cauquén de cabeza gris.<br> El cauquén colorado se encuentra seriamente amenazado por diversos factores antrópicos. Pero la marcada reducción registrada en su población, se debe sobre todo a que durante muchos años fue considerada una especie “plaga” que causaba daños en los cultivos, por lo cual se promovía su caza y la destrucción de sus nidos.<br> Está incluido en el Apéndice I de la Convención de Especies Migratorias (CMS).<br> En su ruta migratoria, dentro de la provincia de Buenos Aires puede llegar a vérselo en las Reservas Naturales: San Blas; Bahía Blanca, Falsa y Verde; Pehuen-Có – Monte Hermoso y Arroyo Los Gauchos.ecialmente por su forma de alimentación, el guanaco ocupa hábitats con marcadas diferencias en estructura de la vegetación, relieve, clima y presencia de actividades humanas',
                status: 'Declarada especie en peligro crítico de extinción, sus principales amenazas son la caza furtiva (que afecta también a las otras dos especies de cauquén mencionadas), la disminución del éxito reproductivo debido a la alteración del hábitat en el área de nidificación y la presencia de especies exóticas invasoras que depredan las nidadas. <br> La caza es la principal causa que explica la reducción en la población de cauquén colorado, decido a que durante muchos años esta especie fue considerada una “plaga” que causaba daños en los cultivos.',
                photo: 'https://www.ambiente.gba.gob.ar/imagenes/anp/cauquen.jpg'
            },
        ],
        dailySpecies: null
      };
    },
    methods: {
      getRandomSpecies() {
        const randomIndex = Math.floor(Math.random() * this.speciesList.length);
        return this.speciesList[randomIndex];
      },
      getDailySpecies() {
        const storedSpecies = localStorage.getItem('dailySpecies');
        const storedDate = localStorage.getItem('dailySpeciesDate');
  
        if (storedSpecies && storedDate && storedDate === this.currentDate.toDateString()) {
          this.dailySpecies = JSON.parse(storedSpecies);
        } else {
          this.dailySpecies = this.getRandomSpecies();
          localStorage.setItem('dailySpecies', JSON.stringify(this.dailySpecies));
          localStorage.setItem('dailySpeciesDate', this.currentDate.toDateString());
        }
      }
    },
    mounted() {
      this.getDailySpecies();
    }
  };