import { container } from '../../inversify.config'
import { FileParserService } from './fileParser.service'

describe('FileParserService', () => {
  let service: FileParserService

  beforeEach(() => {
    service = container.get(FileParserService)
  })

  xit('', () => {
    service.ParseCSVToBankRecord<void>('')
  })
})
