import json from './epsg-index-data.json' assert {type: 'json'}
import proj4 from 'proj4'


const transformFactory = (from, to) => {
	if ('string' !== typeof from) throw new Error('from must be a string')
	from = from.replace(/^epsg:/i, '')
	const fromEPSG = json[from]
	if (!fromEPSG) throw new Error(from + ' is not a valid EPSG coordinate system')

	if ('string' !== typeof to) throw new Error('to must be a string')
	to = to.replace(/^epsg:/i, '')
	const toEPSG = json[to]
	if (!toEPSG) throw new Error(to + ' is not a valid EPSG coordinate system')

	return proj4(fromEPSG.proj4, toEPSG.proj4)
}

// --------------------------------------------------------------------------

// indexs of locals coodinate systemes 
// ** with respect to the order of zones
const ZONES_index = ['EPSG:26191', 'EPSG:26192', 'EPSG:26194', 'EPSG:26195']
// index of the global coodinate systeme
const WGS_index = 'EPSG:4326'

const transformer = []

for (const zone of ZONES_index) {
    transformer.push({
        zone,
        transform: transformFactory(zone, WGS_index),

    })
}

export default transformer