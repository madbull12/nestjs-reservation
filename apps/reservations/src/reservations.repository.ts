import { AbstractRepository } from "@app/common/database/abstract.respository";
import { Injectable, Logger } from "@nestjs/common";
import { ReservationDocument, ReservationSchema } from "./models/reservation.schema";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";

@Injectable()
export class ReservationsRepository extends AbstractRepository<ReservationDocument> {
    protected readonly logger = new Logger(ReservationsRepository.name);
    public test():void {
    }
    constructor(
        @InjectModel(ReservationDocument.name) reservationModel: Model<ReservationDocument>
    ) {
        super(reservationModel)
    }

} 