
export interface Specimen{
    id: string;
    accessionIdentifier?: string;
    description?: string;
    status?: "available" | "unavailable" | "unsatisfactory" | "entered-in-error"
    type?: string; // stringként használom a könnyebb felhasználás érdekében 
    subject?: string;
    receivedTime?: string; // a könnyebb kezelhetőség miatt stringként adom meg Date helyett
    parent?: Reference;
    request?: Reference;
    collection? : BackboneElement;
    processing?: BackboneElement;
    container? : BackboneElement;
    condition? : CodeableConcept;
    note?: string;
    collector?: string;
    collectedDateTime? : string; // itt is stringként használom inkább 
  }
  export interface CodeableConcept{

  }
  export interface BackboneElement{

  }
  export interface Reference {

  }

  