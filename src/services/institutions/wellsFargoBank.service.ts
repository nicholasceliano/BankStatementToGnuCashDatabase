import { BankInstitution } from '../../models/BankInstitution'
import { GnuCashTransaction } from '../../models/gnuCash/GnuCashTransaction'
import { WellsFargoBankRecord } from '../../models/institutions/WellsFargoBankRecord'
import { injectable, inject } from 'inversify'
import { ConfigurationService } from '../configuration.service'
import { FileParserService } from '../file/fileParser.service'

@injectable()
export class WellsFargoBankService extends FileParserService implements BankInstitution {
  constructor(@inject(ConfigurationService) protected configurationService: ConfigurationService) {
    super(configurationService)
  }

  ParseCSV (fileContent: string, accountGuid: string): GnuCashTransaction[] {
    const records = this.ParseCSVToBankRecord<WellsFargoBankRecord>(fileContent)
    const transactions = this.MapBankRecordsToGnuCashTransactions<WellsFargoBankRecord>(records, accountGuid,
      (r) => r.Description,
      (r) => r.Amount,
      (r) => `${r.Date} ${r.Time}Z`)

    return transactions
  }

  ParsePDF (): GnuCashTransaction[] {
    throw Error('Not Implemented')
  }
}