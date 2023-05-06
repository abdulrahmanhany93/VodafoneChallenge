import { inject, injectable } from "inversify";
import Servicetypes from "../../../../core/utils/SlTypes";
import CloudConsumer from "../../../../core/api/ApiConsumer";
import { EndPoint } from "../../../../core/api/EndPoints";
import IBrandWebServices from "./IBrandWebServices";
@injectable()
class BrandWebServices implements IBrandWebServices {
  @inject(Servicetypes.CloudConsumer) private cloudConsumer!: CloudConsumer;
 async getSections(brandId:string): Promise<any> {
    return await this.cloudConsumer.getCollection(`${EndPoint.brandsPath}/${brandId}/sections`);
  }
}
export default BrandWebServices;
