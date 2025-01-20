// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'
import volunteer from './volunteer'
import images from './images'
import submitPSA from './submitPSA'
import getInvolved from './getInvolved'
import donate from './donate'
import becomeDJ from './becomeDJ'
import stream from './stream'
import shop from './shop'
import whatsOn from './whatsOn'
import supporters from './supporters'
import footer from './footer'
import homePage from './homePage'
import history from './history'

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'default',
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    volunteer, images, submitPSA, getInvolved, donate, becomeDJ, stream, shop, whatsOn, supporters, history, footer, homePage
  ]),
})
