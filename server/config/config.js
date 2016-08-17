var path = require('path');
	rootPath = path.normalize(__dirname + '/../../');

module.exports = {
	development: {
		db: 'mongodb://localhost/mtl',
		rootPath: rootPath,
		port: process.env.PORT || 5150,
		where: 'development - local',
		secrets: {
			session: 'mtl-development-advent'
			},
		userRoles: ['user', 'admin'],
		keys: {
			access: process.env.access,
			secret: process.env.secret,
			bucket: process.env.bucket,
			region: process.env.region
			}
	},
	production: {
		db: 'mongodb://clervius:JcVrm431@ds161225.mlab.com:61225/mtltest',
		rootPath: rootPath,
		port: process.env.PORT || 80,
		where: 'production - mlab',
		secrets: {
			session: 'mtl-advent'
			},
		userRoles: ['user', 'admin'],
		keys: {
			access: process.env.access,
			secret: process.env.secret,
			bucket: process.env.bucket,
			region: process.env.region
			}
	}
}