const pool = require("../db/pool");

exports.getData = async (req, res) => {
  try {
    let reques = req.body;
    console.log("body is ",reques)
    let filter = "";
    if (reques.country.length === 0) {
      console.log("hahaha");
      filter = "";
    } else {
      filter = "and country_name in ('World',";
      let temp = reques.country;
      for (i = 0; i < temp.length; i++) {
        filter += `'${temp[i]}'`;
        if (i !== temp.length - 1) {
          filter += ",";
        }
      }
      filter += ")";
      console.log(filter);
    }
    
    // let sqlUser = `
    //         WITH RankedData AS (
    //               SELECT
    //                 country_name,
    //                 years,
    //                 CAST(population AS bigint) AS population,
    //                 region,
    //                 ROW_NUMBER() OVER (PARTITION BY years ORDER BY years ASC, population DESC) AS row_num
    //               FROM populations
    //                   where country_name not in ('Less developed regions',
    //                                                 'Less developed regions, excluding least developed countries',
    //                                                 'Asia (UN)',
    //                                                 'Less developed regions, excluding China',
    //                                                 'Upper-middle-income countries',
    //                                                  'More developed regions',
    //                                                  'Lower-middle-income countries',
    //                                                  'High-income countries',
    //                                                  'Europe (UN)','Africa (UN)','Oceania (UN)',
    //                                                  'Least developed countries',
    //                                                  'Latin America and the Caribbean (UN)',
    //                                                  'Northern America (UN)',
    //                                                  'Low-income countries',
    //                                                  'Land-locked developing countries (LLDC)',
    //                                                  'Small island developing states (SIDS)'
    //                                                 ) ${filter}
    //             )
    //             SELECT
    //               country_name,
    //               years,
    //               CAST(population AS bigint) AS population,
    //               region 
    //               FROM RankedData
    //             WHERE row_num <= 13
    //             ORDER BY years ASC, population DESC;
    //         `;
    let sqlUser = `
    select country_name,
    years,
    CAST(population AS bigint) AS population,
    region from populations
where country_name not in ('Less developed regions',
                                    'Less developed regions, excluding least developed countries',
                                    'Asia (UN)',
                                    'Less developed regions, excluding China',
                                    'Upper-middle-income countries',
                                     'More developed regions',
                                     'Lower-middle-income countries',
                                     'High-income countries',
                                     'Europe (UN)','Africa (UN)','Oceania (UN)',
                                     'Least developed countries',
                                     'Latin America and the Caribbean (UN)',
                                     'Northern America (UN)',
                                     'Low-income countries',
                                     'Land-locked developing countries (LLDC)',
                                     'Small island developing states (SIDS)'
                                    ) ${filter}
ORDER BY years ASC, population DESC`
    let data = await pool.query(sqlUser);
    res.json(data.rows);
  } catch (err) {
    res.json(err);
  }
};

exports.getCountry = async (req, res) => {
  try {
    let sqlUser = `
            SELECT country_name
            FROM populations
            where country_name not in('Less developed regions',
                                    'Less developed regions, excluding least developed countries',
                                    'Asia (UN)',
                                    'Less developed regions, excluding China',
                                    'Upper-middle-income countries',
                                    'More developed regions',
                                    'Lower-middle-income countries',
                                    'High-income countries',
                                    'Europe (UN)','Africa (UN)','Oceania (UN)',
                                    'Least developed countries',
                                    'Latin America and the Caribbean (UN)',
                                    'Northern America (UN)',
                                    'Low-income countries',
                                    'Land-locked developing countries (LLDC)',
                                    'World'
						 'Small island developing states (SIDS)')
            group by country_name
            ORDER BY country_name ASC;	
            `;
    let data = await pool.query(sqlUser);
    res.json(data.rows);
  } catch (err) {
    res.json(err);
  }
};


exports.tryy = async (req, res) => {
  try {
    let sqlUser = `select * from populations`;
    let data = await pool.query(sqlUser);
    res.json(data.rows);
  } catch (err) {
    res.json(err);
  }
};