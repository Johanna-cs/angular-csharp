using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;



namespace angulartest.Controllers
{
    [ApiController]
    [Route("[controller]")]

    public class ConcessionController : ControllerBase
    {
        // Data from concession
        public static int[] ids =
        {
            1, 2, 3, 4
        };

        public static string[] Brands =
        {
            "Audi", "Hyundai", "Toyota", "Volkswagen",
        };

        public static string[] Types =
        {
            "A8", "E360", "Hilux", "Polo",
        };

        public static int[] Quantities =
        {       
            1, 2, 4, 2,
        };

        public static string [] Colors =
        {
            "", "", "", "",
        };

        /* Concession cars = new Concession();
         //déclaration de tableau d'objet
         public Concession[] concessions1 =
         {
             new Concession()
             {
                 Brand="marque",
                 Quantity=22,
                 Type="tptp"
             },
               new Concession()
             {
                 Brand="marque",
                 Quantity=22,
                 Type="tptp"
             }
         };*/

        /*List<Concession> concessions = new List<Concession>()
        {
            new Concession()
            {
                Brand="marque",
                Quantity=22,
                Type="tptp"
            },
              new Concession()
            {
                Brand="marque",
                Quantity=22,
                Type="tptp"
            }
        };
         */
        // GET: api/<ConcessionController>
        [HttpGet]
        public IEnumerable<Concession> Get()
        {
            List<Concession> concessions = new List<Concession>();

            int i = 0;
            foreach (string brand in Brands)
            {
                var cars = new Concession
                {
                    id = ids[i],
                    Brand = Brands[i],
                    Quantity = Quantities[i],
                    Type = Types[i],
                    Color = Colors[i]
                };
                concessions.Add(cars);
                i++;
            }
            return concessions;


        }

        // GET: api/<ConcessionController>
        //[HttpPost]
        //public IEnumerable<Concession> Post()

    }
}
/*for (int i = 0; i < 4; i++)
{
    var cars = new Concession
    {
        Brand = Brands[i],
        Quantity = Quantities[i],
        Type = Types[i]
    };
    concessions.Add(cars);
}*/
/*
 i = 0;
while (i < Quantities.Length)
{
    var cars = new Concession();
    cars.Brand = Brands[i];
    cars.Quantity = Quantities[i];
    cars.Type = Types[i];
    concessions.Add(cars);
    i++;
}

 i = 0;
do
{
    var cars = new Concession();
    cars.Brand = Brands[i];
    cars.Quantity = Quantities[i];
    cars.Type = Types[i];
    concessions.Add(cars);
    i++;
}
while (i < Quantities.Length);*/