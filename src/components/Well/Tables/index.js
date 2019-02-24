import assetList from './AssetList'
import fieldList from './FieldList'
import wellHeader from './WellHeader'
import wellHandover from './WellHandovers'
import PlainTable from '@/components/CustomTables/PlainTables'

export const AssetList = PlainTable(assetList)
export const FieldList = PlainTable(fieldList)
export const WellHeader = PlainTable(wellHeader)
export const WellHandovers = PlainTable(wellHandover)
