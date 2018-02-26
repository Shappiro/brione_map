const myRequest = new Request('https://www.inaturalist.org/observations?swlat=45.8770002703&swlng=10.854029169&nelat=45.8940953423&nelng=10.8886448677',
 {
 	method: 'GET'
 });

var json;
const toDelete = ['description','map_scale','timeframe','user_id','created_at','updated_at','place_guess',
'taxon_id','id_please','observed_on_string','iconic_taxon_id','num_identification_agreements',
'num_identification_disagreements','time_observed_at','time_zone','location_is_exact','delta','geoprivacy',
'positioning_method','positioning_device','out_of_range','license','observation_photo_count','comments_count',
'zic_time_zone','oauth_application_id','observation_sound_count','identifications_count','captive','community_taxon_id',
'site_id','old_uuid','public_positional_accuracy','cached_votes_total','last_indexed_at','uuid','short_description',
'user_login','tag_list','faves_count','created_at','updated_at_utc','time_observed_at_utc','owners_identification_from_vision',
'coordinates_obscured','iconic_taxon'];

fetch(myRequest)
  .then(response => {
    if (response.status === 200) {
    	json = JSON.parse(result);
		json.filter(function(item) {
			item.mappable == true;
		});
		delete json[toDelete];
		return json;

    } else {
      throw new Error('Something went wrong on API iNaturalist server!');
    }
  })
  .then(response => {
    console.debug(response);
  }).catch(error => {
    console.error(error);
  });
