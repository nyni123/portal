import React, { useState } from "react";

const USMapWithImageMap = () => {
  const [hoveredState, setHoveredState] = useState(null);
  const stateData = {
    AL:
    (<div>
      <strong><h1>Alabama</h1></strong>
      <strong><h3>2018 S.B. 318, Act No. 396</h3></strong>
      <ul style={{ listStyleType: "circle", paddingLeft: "20px" }}>
        <li>Enacted in 2018, Alabama’s data breach notification legislation requires entities that acquire or use “sensate personally identifying information” of Alabama residents to notify affected individuals of any unauthorized acquisition of data.</li>
        <li>Notification in writing must be made as expeditiously as possible and without unreasonable delay, and no later than 45 days of receipt of notice of the breach. Notification is not required if it is determined the breach is not reasonably likely to cause substantial harm to affected individuals.</li>
        <li>Breached third parties must notify the relevant data owners or licensees within 10 days.</li>
        <li>If more than 1,000 individuals must be notified of a breach, breached entities must also notify the Attorney General, and all consumer reporting agencies that compile and maintain files on consumers on a nationwide basis, as defined in 15 U.S.C. Section 1681a.</li>
        <li>Substitute notice is permitted in specific circumstances and notification may be delayed for law enforcement purposes.</li>
        <li>Entities in compliance with relevant federal and state regulations, HIPAA or the GLBA are deemed to comply with this law. They must still provide written notice to the Alabama Attorney General when the number of individuals the entity notified exceeds 1,000.</li>
        <li>Civil penalties as high as $500,000 per breach are stipulated. Failure to properly notify can result in additional penalties of up to $5,000 per day for each consecutive day there is a failure to comply with notification provisions</li>
      </ul>
    </div>) ,
    AK:
    (<div>
      <strong><h1>Alaska</h1></strong>
      <strong><h3>Alaska Statutes 45.48.010: Personal Information Protection Act</h3></strong>
      <ul style={{ listStyleType: "circle", paddingLeft: "20px" }}>
        <li>Enacted in 2008, Alaska’s data breach notification legislation requires entities that own or license the personal information of Alaska residents to notify them without unreasonable delay of any data breach that results or could result in the unauthorized acquisition of their personal information. Acquisition can include paper-based methods.</li>
        <li>Notification is not required if an investigation determines that there is no reasonable likelihood to the affected individuals has resulted or will result from the information’s loss and the Attorney General is informed of this fact in writing</li>
        <li>Substitute notice is permitted in specific circumstances and notification may be delayed for law enforcement purposes.</li>
        <li>If more than 1,000 individuals have to be notified of a breach, breached entities must also notify all consumer reporting agencies that compile and maintain files on consumers on a nationwide basis, as defined in 15 USC Section 1681a(p), unless they are compliant with the GLBA.</li>
        <li>Breached third parties must notify the relevant data owners or licensees.</li>
        <li>Civil penalties of between $500 and $50,000 are stipulated.</li>
      </ul>
    </div>) ,
    AZ:
    (<div>
      <strong><h1>Arizona</h1></strong>
      <strong><h3>Arizona Revised Statutes 18-545</h3></strong>
      <ul style={{ listStyleType: "circle", paddingLeft: "20px" }}>
        <li>Enacted in 2006, Arizona’s data breach notification law requires entities that conduct business in Arizona which own, maintain, or license unencrypted and unredacted computerized personal information to notify affected individuals within 45 days of determining that a breach has occurred.</li>
        <li>Notification is not required if an investigation determines a breach has not resulted in or is not reasonably likely to result in substantial economic loss to affected individuals.</li>
        <li>Substitute notice is permitted in specific circumstances and notification may be delayed for law enforcement purposes.</li>
        <li>Entities must notify the Attorney General in writing if the entity is required to notify more than 1,000 Arizona residents.</li>
        <li>Entities that maintain their own notification procedures are deemed to comply with the notification requirements of this law, if the procedures are consistent with statute and are followed in the event of a breach.</li>
        <li>Entities in compliance with relevant federal and state regulations, HIPAA or the GLBA are deemed to comply with this law.</li>
        <li>Breached third parties must notify the relevant data owners or licensees as soon as possible.</li>
        <li>Civil penalties of up to $10,000 to $500,000 are stipulated.</li>
      </ul>
    </div>),
    AR:
    (<div>
      <strong><h1>Arkansas</h1></strong>
      <strong><h3>Arkansas Code 4-110-101: Personal Information Protection Act</h3></strong>
      <ul style={{ listStyleType: "circle", paddingLeft: "20px" }}>
        <li>Enacted in 2005, Arkansas’s data breach notification legislation requires entities - regardless of their location - that acquire, own, or license computerized personal information relating to Arkansas residents to notify affected individuals of unauthorized acquisitions of computerized data that compromises the security, confidentiality, or integrity of personal information maintained by the entity.</li>
        <li>Notification must be made in the most expedient time and manner possible without unreasonable delay.</li>
        <li>Notification is not required if an investigation determines that there is no reasonable likelihood of harm to affected individuals.</li>
        <li>Breached third parties must notify the relevant data owners or licensees immediately following discovery of the unauthorized acquisition.</li>
        <li>Substitute notice is permitted in specific circumstances and notification may be delayed for law enforcement purposes.</li>
        <li>Entities that maintain their own notification procedures are deemed to comply with the notification requirements of this law, if the procedures are consistent with statute and are followed in the event of a breach.</li>
      </ul>
    </div>),
    CA:
    (<div>
      <strong><h1>California</h1></strong>
      <strong><h3>California Civil Code 1798:29 and 1798:80</h3></strong>
      <ul style={{ listStyleType: "circle", paddingLeft: "20px" }}>
        <li>Enacted in 2002, California’s data breach notification legislation requires entities that own or license computerized personal information to give notice to residents of California of any data breach that results or could result in the unauthorized acquisition of unencrypted personal information.</li>
        <li>Notification must be made in the most expedient time possible and without unreasonable delay, consistent with
           the legitimate needs of law enforcement and any measures necessary to determine the scope of the breach and restore the reasonable integrity of the data system.</li>
        <li>Substitute notice is permitted in specific circumstances and notification may be delayed for law enforcement purposes.</li>
        <li>Entities must notify the Attorney General if the entity is required to notify more than 500 California residents. The entity can electronically submit a sample copy of the notification.</li>
        <li>Breached third parties must notify the relevant data owners or licensees immediately following discovery of the unauthorized acquisition. </li>
        <li>Entities that maintain their own notification procedures are deemed to comply with the notification requirements of this law, if the procedures are consistent with statute and are followed in the event of a breach.</li>
        <li>HIPAA-covered entities are deemed to comply with the notice requirements of this law if they comply with the notice requirements of HIPAA.</li>
        <li>Any customer injured by a violation of this title may institute a civil action to recover damages.</li>
      </ul>
    </div>),
    CO:
    (<div>
      <strong><h1>Colorado</h1></strong>
      <strong><h3>Colorado Revised Statutes 6-1-716</h3></strong>
      <ul style={{ listStyleType: "circle", paddingLeft: "20px" }}>
        <li>Enacted in 2006, Colorado’s data breach notification law requires entities that conduct business in Colorado, and that own, license, or maintain computerized personal information on Colorado residents to notify those individuals of unauthorized acquisition of unencrypted data that compromises the security, confidentiality, or integrity of personal information. </li>
        <li>Notice shall be made in the most expedient time possible and without unreasonable delay, but not later than 30 days after determining a breach occurred. </li>
        <li>If notice is provided to more than 500 CO residents, the entity must also notify the Attorney General. </li>
        <li>If notice is provided to more than 1,000 CO residents, the entity must also notify all consumer reporting agencies that compile and maintain files on consumers on a nationwide basis, as defined in 15 USC Section 1681a(p).</li>
        <li>Substitute notice is permitted in specific circumstances and notification may be delayed for law enforcement purposes.</li>
        <li>Breached third parties must notify and cooperate with the relevant data owners or licensees immediately following discovery of a breach, if misuse of personal information about a CO resident occurred or is likely to occur.</li>
        <li>Notification pursuant to laws, rules, regulations, guidance, or guidelines established by an entity’s primary state regulator is sufficient for compliance with this law.</li>
      </ul>
    </div>),
    CT:
    (<div>
      <strong><h1>Connecticut</h1></strong>
      <strong><h3>Connecticut General Statutes 36a-701b</h3></strong>
      <ul style={{ listStyleType: "circle", paddingLeft: "20px" }}>
        <li>Enacted in 2005, Connecticut’s data breach notification law requires entities that conduct business in Connecticut, and that own, license, or maintain computerized personal information, to notify Connecticut residents of any unauthorized access or acquisition of electronic files, media, databases, or computerized data containing readable, usable, or unencrypted personal information.</li>
        <li>Notification shall be made without unreasonable delay, but no later than 90 days after the discovery of a breach, unless a shorter time is required under federal law. Notice must also be provided to the Attorney General. </li>
        <li>Notification is not required if an investigation, along with consultation with relevant government agencies, determines that there is no reasonable likelihood that the breach will result in harm to affected individuals. </li>
        <li>Substitute notice is permitted in specific circumstances and notification may be delayed for law enforcement purposes.</li>
        <li>Breached third parties must notify the relevant data owners or licensees immediately following the actual discovery or reasonable belief that a breach has occurred.</li>
        <li>Notification pursuant to laws established by an entity’s primary state regulator is sufficient for compliance with this law.</li>
      </ul>
    </div>),
    DE:
    (<div>
      <strong><h1>Delaware</h1></strong>
      <strong><h3>Delaware Code Title 6, Chapter 12B</h3></strong>
      <ul style={{ listStyleType: "circle", paddingLeft: "20px" }}>
        <li>Enacted in 2005, Delaware’s data breach notification law requires entities that conduct business in Delaware, and own or license computerized personal information Delaware residents, to notify affected individuals of any unauthorized acquisition of computerized data that compromises the security, confidentiality, or integrity of personal information which renders such information readable or usable. </li>
        <li>Notice must be made without unreasonable delay but not later than 60 days after determination of a security breach, unless a shorter time period applies under federal law.</li>
        <li>Notification is not required if, after appropriate investigation, the entity reasonably determines the entity reasonably determines the breach is unlikely to result in harm to the affected individuals.</li>
        <li>Substitute notice is permitted in specific circumstances and notification may be delayed for law enforcement purposes.</li>
        <li>Breached third parties must notify the relevant data owners or licensees immediately following determination of a breach.</li>
        <li>Entities which maintain their own notification procedures as part of an information security policy that contains timing requirements consistent with state law are deemed to comply with the notification requirements of this law if the entity notifies affected Delware residents in accordance with its policies</li>
      </ul>
    </div>),
    FL:
    (<div>
      <strong><h1>Florida</h1></strong>
      <strong><h3>Fla. Stat. § 501.171</h3></strong>
      <ul style={{ listStyleType: "circle", paddingLeft: "20px" }}>
        <li>Enacted in 2014, Florida’s data breach notification law requires any entity that acquires, maintains, stores, or uses personal information to notify individuals in the state of unauthorized access to personal information in electronic form.</li>
        <li>Notice to individuals must be made as expeditiously as practicable and without unreasonable delay, no later than 30 days after determination of a security breach. Entities may receive 15 additional days if good causes if provided to the Department of Legal Affairs in writing within the original 30-day period. </li>
        <li>Entities must also provide notice to the Department of Legal Affairs if the breach affects more than 500 individuals in Florida.</li>
        <li>If more than 1,000 individuals are affected, breached entities must also inform all consumer reporting agencies that compile and maintain files on consumers on a nationwide basis, as defined in 15 USC Section 1681a(p), without unreasonable delay. </li>
        <li>Notice is not required if an appropriate investigation and consultation with relevant government agencies determines the breach has not and likely will not result in identity theft or any other financial harm to affected individuals. Such determination must be documented in writing and maintained for at least five years. Entities must provide this written determination to the Department of Legal Affairs within 30 days after the determination.</li>
        <li>Substitute notice is permitted in specific circumstances and notification may be delayed for law enforcement purposes.</li>
        <li>Breached third parties must notify relevant data owners or licensees within ten days of the discovery of a breach. After receiving notice from a third party, the data-owner-entity must provide notices to the Department and Affected Individuals.</li>
        <li>Failure to properly notify either the Department of Legal Affairs or affected individuals may result civil penalties of $1,000 per day that the breach goes undisclosed for up to 30 days; $50,000 for each 30-day period thereafter, up to 180 days; not to exceed $500,000. </li>
      </ul>
    </div>),
    GA:
    (<div>
      <strong><h1>Georgia</h1></strong>
      <strong><h3>Georgia Code 10-1-912</h3></strong>
      <ul style={{ listStyleType: "circle", paddingLeft: "20px" }}>
        <li>Enacted in 2005, Georgia’s data breach notification legislation requires information brokers and data collectors to notify Georgia residents when unencrypted personal information is, or is reasonably believed to have been, acquired by an unauthorized person. </li>
        <li>Notice shall be made in the most expedient time possible and without unreasonable delay.</li>
        <li>Substitute notice is permitted in specific circumstances and notification may be delayed for law enforcement purposes.</li>
        <li>Breached third parties must notify the relevant data owners or licensees within 24 hours of the discovery of a breach if personal information was, or is reasonably believed to have been, acquired by an unauthorized person.</li>
        <li>If more than 10,000 Georgia residents have to be notified of a breach, breached entities must also inform all consumer reporting agencies that compile and maintain files on consumers on a nationwide basis, as defined in 15 USC Section 1681a, without unreasonable delay.</li>
        <li>Entities which maintain their own notification procedures as part of an information security policy consistent with state law are deemed to comply with the notification requirements of this law if the entity makes notifications in accordance with its policies. </li>
      </ul>
    </div>),
    HI:
    (<div>
      <strong><h1>Hawaii</h1></strong>
      <strong><h3>Hawaii Revised Statutes 487N-1</h3></strong>
      <ul style={{ listStyleType: "circle", paddingLeft: "20px" }}>
        <li>Enacted in 2006, Hawaii’s data breach notification law requires entities to notify affected individuals of any unauthorized access or acquisition of unencrypted or unredacted personal information, where illegal use of the personal information has occurred or is reasonably likely to occur and creates a risk of harm to an individual.</li>
        <li>Notice must be made without unreasonable delay. </li>
        <li>Substitute notice is permitted in specific circumstances and notification may be delayed for law enforcement purposes.</li>
        <li>If more than 1,000 individuals must be notified, Hawaii’s Office of Consumer Protection must also be notified, as must all consumer reporting agencies that compile and maintain files on consumers on a nationwide basis, as defined in 15 USC Section 1681a(p).</li>
        <li>Breached third parties must notify the relevant data owners or licensees immediately following discovery of the breach</li>
        <li>Breached government agencies must submit a written report to the legislature within 20 days of the discovery of a breach.</li>
        <li>Health care organizations in compliance with HIPAA are deemed to comply with this law, as are financial institutions in compliance with the Federal Interagency Guidance Programs for Unauthorized Access to Customer Information and Customer Notice.</li>
        <li>Penalties of up to $2,500 are stipulated for each violation. Businesses may also be liable for any actual damages suffered by individuals.</li>
      </ul>
    </div>),
    ID:
    (<div>
      <strong><h1>Idaho</h1></strong>
      <strong><h3>Idaho Code 28-51-104</h3></strong>
      <ul style={{ listStyleType: "circle", paddingLeft: "20px" }}>
        <li>Enacted in 2006, Idaho’s data breach notification law requires entities that conduct business in Idaho, and that own or license the computerized personal information of Idaho residents, to notify affected individuals of an illegal acquisition of unencrypted computerized data that materially compromises the security, confidentiality, or integrity of personal information.  </li>
        <li>Notice shall be made in the most expedient time possible and without unreasonable delay, consistent with any measures necessary to determine the scope of the breach, identify affected individuals, and restore the reasonable integrity of data system(s). State agencies must inform the office of the Idaho Attorney General within 24 hours of the discovery of a data breach.</li>
        <li>Breached third parties must notify the relevant data owners or licensees immediately following discovery of a breach if misuse of personal information about an Idaho resident occurred or is reasonably likely to occur.</li>
        <li>Substitute notice is permitted in specific circumstances and notification may be delayed for law enforcement purposes.</li>
        <li>Entities which maintain their own notification procedures as part of an information security policy consistent with state law are deemed to comply with the notification requirements of this law if the entity makes notifications in accordance with its policies.  </li>
        <li>Entities that intentionally fail to give notice are subject to a fine of up to $25,000 per breach.</li>
        <li>Government employees who intentionally disclose personal information are subject to a fine of up to $2,000 and/or up to a year’s imprisonment.</li>
      </ul>
    </div>),
    IL:
    (<div>
      <strong><h1>Illinois</h1></strong>
      <strong><h3>815 ILCS 530: Personal Information Protection Act</h3></strong>
      <ul style={{ listStyleType: "circle", paddingLeft: "20px" }}>
        <li>Enacted in 2005, Illinois’s data breach notification law requires entities that own or license personal information relating to Illinois residents to notify affected individuals of any unauthorized acquisition of their unencrypted and unredacted personal information.</li>
        <li>Notice shall be made in the most expedient time possible and without unreasonable delay.</li>
        <li>Breached third parties must notify the relevant data owners or licensees immediately following discovery.</li>
        <li>Substitute notice is permitted in specific circumstances and notification may be delayed for law enforcement purposes.</li>
        <li>Entities which maintain their own notification procedures as part of an information security policy consistent with state law are deemed to comply with the notification requirements of this law if the entity makes notifications in accordance with its policies.  </li>
        <li>State agencies that collect personal information must submit a written report to the General Assembly within five business days of the discovery or notification of a breach.</li>
      </ul>
    </div>),
    IN:
    (<div>
      <strong><h1>Indiana</h1></strong>
      <strong><h3>Ind. Code §§ 4-1-11 et seq., 24-4.9 et seq.</h3></strong>
      <ul style={{ listStyleType: "circle", paddingLeft: "20px" }}>
        <li>Enacted in 2005, Indiana’s data breach notification law requires entities that own or license computerized personal information  to notify Indiana residents of any unauthorized acquisition of their unencrypted or unredacted personal information if it could result in identity theft or fraud.</li>
        <li>Notice shall be made without unreasonable delay. Data base owners must also disclose the breach to the Attorney General. </li>
        <li>If more than 1,000 individuals must be notified of a breach, breached entities must also inform all consumer reporting agencies that compile and maintain files on consumers on a nationwide basis, as defined in 15 USC Section 1681a(p).</li>
        <li>Substitute notice is permitted in specific circumstances and notification may be delayed for law enforcement purposes.</li>
        <li>Breached third parties must notify the relevant data owners or licensees.</li>
        <li>Entities which maintain their own notification procedures as part of an information security policy consistent with state law are deemed to comply with the notification requirements of this law if the entity makes notifications in accordance with its policies.</li>
        <li>Entities in compliance with HIPAA, the GLBA, the USA PATRIOT Act, and other named laws are deemed to comply with this law.</li>
        <li>Knowingly or intentionally failing to comply with database maintenance obligations is actionable only by the state Attorney General with penalties up to $150,000 per violation.</li>
      </ul>
    </div>),
    IA:
    (<div>
      <strong><h1>Iowa</h1></strong>
      <strong><h3>Iowa Code 715C.1</h3></strong>
      <ul style={{ listStyleType: "circle", paddingLeft: "20px" }}>
        <li>Enacted in 2008, Iowa’s data breach notification law requires entities that own or license computerized personal information relating to Iowa residents to notify affected individuals of any unauthorized acquisition of their unencrypted and unredacted personal information.</li>
        <li>Notice shall be made in the most expeditious manner possible and without unreasonable delay. </li>
        <li>If more than 500 individuals must be notified of a breach, breached entities must also notify the director of the consumer protection division of the Attorney General’s Office within five days of notice being given to affected individuals.</li>
        <li>Breached third parties must notify the relevant data owners or licensees.</li>
        <li>Notification is not required if, after appropriate investigation or consultation with relevant government authorities, the entity determines no reasonable likelihood of financial harm to affected individuals has resulted or will result from the breach.  </li>
        <li>Substitute notice is permitted in specific circumstances and notification may be delayed for law enforcement purposes.</li>
        <li>Entities in compliance with the GLBA and those that comply with notification requirements that provide greater protection for personal information are deemed to comply with this law.</li>
      </ul>
    </div>),
    KS:
    (<div>
      <strong><h1>Kansas</h1></strong>
      <strong><h3>Kansas Statutes 50-7a01</h3></strong>
      <ul style={{ listStyleType: "circle", paddingLeft: "20px" }}>
        <li>Enacted in 2006, Kansas’s data breach notification law requires entities that conduct business in Kansas and that own or license computerized personal information, to notify Kansas residents of any unauthorized acquisition of their unencrypted and unredacted personal information.</li>
        <li>Notice must be made without unreasonable delay.Notification is not required if a good-faith, reasonable and prompt investigation determines personal information has not been and will not be misused.</li>
        <li>If more than 1,000 individuals must be notified of a breach, breached entities must also inform all consumer reporting agencies that compile and maintain files on consumers on a nationwide basis, as defined in 15 USC Section 1681a(p).</li>
        <li>Substitute notice is permitted in specific circumstances and notification may be delayed for law enforcement purposes.</li>
        <li>Breached third parties must notify the relevant data owners or licensees following discovery of the breach.</li>
        <li>Entities which maintain their own notification procedures as part of an information security policy consistent with state law are deemed to comply with the notification requirements of this law if the entity makes notifications in accordance with its policies.  </li>
      </ul>
    </div>),
    KY:
    (<div>
      <strong><h1>Kentucky</h1></strong>
      <strong><h3>KY Rev. Stat. §365.732</h3></strong>
      <ul style={{ listStyleType: "circle", paddingLeft: "20px" }}>
        <li>Enacted in 2014, Kentucky’s data breach notification law requires entities that conduct business in Kentucky to notify Kentucky residents of any unauthorized acquisition of their unencrypted personal information.</li>
        <li>Notice must be made without unreasonable delay. </li>
        <li>Breached third parties must notify the relevant data owners as soon as reasonably practical following discovery of a breach. </li>
        <li>If more than 1,000 individuals must be notified of a breach, breached entities must also notify all consumer reporting agencies that compile and maintain files on consumers on a nationwide basis, as defined in 15 USC Section 1681a(p).</li>
        <li>Substitute notice is permitted in specific circumstances and notification may be delayed for law enforcement purposes. </li>
        <li>Entities which maintain their own notification procedures as part of an information security policy consistent with state law are deemed to comply with the notification requirements of this law if the entity makes notifications in accordance with its policies.</li>
        <li>Entities in compliance with the GLBA, HIPAA, or with other named legislation, are deemed to comply with this law.</li>
      </ul>
    </div>),
    LA:
    (<div>
      <strong><h1>Louisiana</h1></strong>
      <strong><h3>Louisiana Revised Statutes 51:3071 and Louisiana Administrative Code (Title 16, Part III, Chapter 7, Section 701)</h3></strong>
      <ul style={{ listStyleType: "circle", paddingLeft: "20px" }}>
        <li>Enacted in 2005, Louisiana’s data breach notification law requires entities that conduct business in Louisiana or that own or license computerized personal information of Louisiana residents, to notify affected individuals of any unauthorized acquisition of their unencrypted and unredacted personal information.</li>
        <li>Notice must be made without unreasonable delay, but no later than 60 days following discovery of the breach. </li>
        <li>Notification is not required if an investigation determines there is no reasonable likelihood of harm to affected individuals.</li>
        <li>Breached third parties must notify the relevant data owners or licensees if personal information has been, or is reasonably believed to have been, acquired by an unauthorized person.</li>
        <li>When notice to Louisiana residents is required, written notice must also be provided to the Consumer Protection Section of the Attorney General’s Office. </li>
        <li>Substitute notice is permitted in specific circumstances and notification may be delayed for law enforcement purposes.</li>
        <li>Entities which maintain their own notification procedures as part of an information security policy consistent with state law are deemed to comply with the notification requirements of this law if the entity makes notifications in accordance with its policies.</li>
        <li>Entities in compliance with the Federal Interagency Guidance Response Programs for Unauthorized Access to Consumer Information and Customer Notice are deemed to comply with this law. </li>
        <li>Breached entities that fail to notify the Attorney General within 10 days of notifying affected individuals may be fined up to $5,000 per day. Civil actions to recover actual damages may also be instituted.</li>
      </ul>
    </div>),
    ME:
    (<div>
       <strong><h1>Maine</h1></strong>
       <strong><h3>10 Me. Rev. Stat. § 1346 et seq.</h3></strong>
      <ul style={{ listStyleType: "circle", paddingLeft: "20px" }}>
        <li>Enacted in 2005, Maine’s data breach notification law requires entities that maintain computerized personal information relating to Maine residents to notify affected individuals of unauthorized acquisition of their unencrypted and unredacted personal information.</li>
        <li>Notice shall be made without unreasonable delay. Relevant state regulators or the state Attorney General must also be informed.</li>
        <li>Notice is not required if the entity conducts an investigation which determines there is no reasonable likelihood personal information has been or will be misused.</li>
        <li>If more than 1,000 individuals must be notified of a breach, breached entities must also notify all consumer reporting agencies that compile and maintain files on consumers on a nationwide basis, as defined in 15 USC Section 1681a(p).</li>
        <li>Breached third parties must notify the relevant data owners or licensees.</li>
        <li>Substitute notice is permitted in specific circumstances and notification may be delayed for law enforcement purposes.</li>
        <li>Civil penalties of $500 per violation are stipulated, up to a maximum of $2,500 per day.</li>
      </ul>
    </div>),
    MD:
    (<div>
      <strong><h1>Maryland</h1></strong>
      <strong><h3>Maryland Commercial Code 14-3501</h3></strong>
      <ul style={{ listStyleType: "circle", paddingLeft: "20px" }}>
        <li>Enacted in 2007, Maryland’s data breach notification law requires entities that own or license computerized personal information relating to Maryland residents to notify affected individuals of unauthorized acquisition of their unencrypted and unredacted personal information if an investigation determines there is a reasonable likelihood of the personal information being misused.</li>
        <li>Notice must be made as soon as reasonably practicable, but no later than 45 days after any internal investigation. </li>
        <li>The Attorney General’s Office must be notified before affected individuals.</li>
        <li>If more than 1,000 individuals must be notified, breached entities must also notify all consumer reporting agencies that compile and maintain files on consumers on a nationwide basis, as defined in 15 USC Section 1681a(p).</li>
        <li>Breached third parties must notify relevant data owners or licensees if it is likely that the breach has resulted or will result in the misuse of a Maryland resident’s personal information.</li>
        <li>Substitute notice is permitted in specific circumstances and notification may be delayed for law enforcement purposes.</li>
        <li>Organizations in compliance with the GLBA or with relevant federal or state regulations are deemed to comply with this law.</li>
      </ul>
    </div>),
    MA:
    (<div>
       <strong><h1>Massachusetts</h1></strong>
       <strong><h3>Massachusetts General Laws 93H, Section 1</h3></strong>
      <ul style={{ listStyleType: "circle", paddingLeft: "20px" }}>
        <li>Enacted in 2007, Massachusetts’s data breach notification law requires entities that own, license, maintain or store personal information of Massachusetts residents to notify them of unauthorized acquisition or use of unencrypted/de-encrypted data that creates a substantial risk of identity fraud or theft. </li>
        <li>Notice must be made without unreasonable delay when the entity knows or has reason to know of a breach.</li>
        <li>Breached entities must also inform the Attorney General and the director of consumer affairs and business regulation, who will then pass on any relevant information to consumer reporting agencies and state agencies.</li>
        <li>Breached third parties must notify and cooperate with the relevant data owners or licensees without unreasonable delay</li>
        <li>Substitute notice is permitted in specific circumstances and notification may be delayed for law enforcement purposes.</li>
        <li>Entities that comply with relevant state or federal regulations are deemed to comply with this law.</li>
      </ul>
    </div>),
    MI:
    (<div>
       <strong><h1>Michigan</h1></strong>
       <strong><h3>Mich. Comp. Laws §§ 445.63, 445.72</h3></strong>
      <ul style={{ listStyleType: "circle", paddingLeft: "20px" }}>
        <li>Enacted in 2006, Michigan’s data breach notification law requires any entity which owns or licenses personal information of Michigan residents to notify affected individuals of unauthorized acquisition of their unencrypted and unredacted personal information.</li>
        <li>Notice must be made without unreasonable delay, unless the breached entity determines the security breach will not cause substantial loss or injury to, or result in identity theft with respect to, one or more Michigan residents.</li>
        <li>reached third parties must notify the relevant data owners or licensees.</li>
        <li>If more than 1,000 individuals must be notified, breached entities must also notify all consumer reporting agencies that compile and maintain files on consumers on a nationwide basis, as defined in 15 USC Section 1681a(p), unless they are subject to Title V of the GLBA.</li>
        <li>Substitute notice is permitted in specific circumstances and notification may be delayed for law enforcement purposes.</li>
        <li>False notification with intent to defraud is a misdemeanour criminal offense subject to monetary penalties or imprisonment. </li>
        <li>Failure to provide proper notification may also result in a civil fine of up to $250 per violation, up to a maximum fine of $750,000 per breac</li>
        <li>Entities in compliance with the Federal Interagency Guidance Response Programs for Unauthorized Access to Consumer Information and Customer Notice and HIPAA-covered entities are deemed to comply with this law.</li>
      </ul>
    </div>),
    MN:
    (<div>
       <strong><h1>Minnesota</h1></strong>
       <strong><h3>Minnesota Statutes 325E.61</h3></strong>
      <ul style={{ listStyleType: "circle", paddingLeft: "20px" }}>
        <li>Enacted in 2005, Minnesota’s data breach notification law requires entities that conduct business in Minnesota, and that own or license personal information, to notify residents of Minnesota of any unauthorized acquisition of their unencrypted personal information.</li>
        <li>Notice must be given without unreasonable delay </li>
        <li>Breached third parties must notify the relevant data owners or licensees immediately following discovery of the breach</li>
        <li>If more than 500 individuals must be notified, breached entities must also notify all consumer reporting agencies that compile and maintain files on consumers on a nationwide basis, as defined in 15 USC Section 1681a, within 48 hours.</li>
        <li>Substitute notice is permitted in specific circumstances and notification may be delayed for law enforcement purposes.</li>
        <li>Entities which maintain their own notification procedures as part of an information security policy consistent with state law are deemed to comply with the notification requirements of this law if the entity makes notifications in accordance with its policies. HIPAA-covered entities are deemed to comply with this law.</li>
      </ul>
    </div>),
    MS:
    (<div>
      <strong><h1>Mississippi</h1></strong>
      <strong><h3>Mississippi Code 75-24-29</h3></strong>
      <ul style={{ listStyleType: "circle", paddingLeft: "20px" }}>
        <li>Enacted in 2010, Mississippi’s data breach notification law requires entities that conduct business in Mississippi, and that own, license or maintain personal information of a Mississippi resident, to notify affected individuals of unauthorized acquisition of their unsecured personal information. </li>
        <li>Notice must be made without unreasonable delay, subject to the completion of appropriate investigation. </li>
        <li>Notification is not required if an investigation determines there is no reasonable likelihood affected individuals will be harmed by the information’s loss.</li>
        <li>Breached third parties must notify the relevant data owners or licensees as soon as practicable following discovery of a breach. Substitute notice is permitted in specific circumstances and notification may be delayed for law enforcement purposes.</li>
        <li>Entities which maintain their own notification procedures as part of an information security policy consistent with state law are deemed to comply with the notification requirements of this law if the entity makes notifications in accordance with its policies.</li>
        <li>Entities that comply with federal breach regulations are deemed to comply with this law.</li>
      </ul>
    </div>),
    MO:
    (<div>
      <strong><h1>Missouri</h1></strong>
      <strong><h3>Missouri Revised Statutes 407.1500</h3></strong>
      <ul style={{ listStyleType: "circle", paddingLeft: "20px" }}>
        <li>Enacted in 2009, Missouri’s data breach notification law requires entities that own or license the personal information of Missouri residents to notify them of any unauthorized acquisition of their unencrypted or unredacted personal information</li>
        <li>Notice must be made without unreasonable delay after discovery of the breach. </li>
        <li>Notification is not required if, after appropriate investigation or consultation with relevant government agencies, the entity determines there is no reasonable likelihood of identity theft or fraud. Breached third parties must notify the relevant data owners or licensees immediately following discovery of the breach.</li>
        <li>If more than 1,000 individuals must be notified, breached entities must also notify the Attorney General’s Office and all consumer reporting agencies that compile and maintain files on consumers on a nationwide basis, as defined in 15 USC Section 1681a(p).</li>
        <li>Substitute notice is permitted in specific circumstances and notification may be delayed for law enforcement purposes.</li>
        <li>Entities which maintain their own notification procedures as part of an information security policy consistent with state law are deemed to comply with the notification requirements of this law if the entity makes notifications in accordance with its policies.</li>
        <li>Entities compliant other state or federal laws relating to data security are deemed to comply with this law, as are financial institutions subject to other relevant legislation, including the GLBA.</li>
      </ul>
    </div>),
    MT:
    (<div>
       <strong><h1>Montana</h1></strong>
       <strong><h3>Montana Code 30-14-1704</h3></strong>
      <ul style={{ listStyleType: "circle", paddingLeft: "20px" }}>
        <li>Enacted in 2006, Montana’s data breach notification law requires entities that conduct business in Montana and own or license computerized personal information, to notify Montana residents of any unauthorized acquisition of their unencrypted personal information.</li>
        <li>Notice must be made without unreasonable delay. An electronic copy of the notice, along with supporting information, must also be submitted to the Attorney General’s consumer protection office. </li>
        <li>Breached entities must coordinate notification with consumer reporting agencies where necessary.</li>
        <li>Breached third parties must notify the relevant data owners or licensees immediately following discovery of the breach. </li>
        <li>Substitute notice is permitted in specific circumstances and notification may be delayed for law enforcement purposes.</li>
        <li>Entities which maintain their own notification procedures as part of an information security policy consistent with state law are deemed to comply with the notification requirements of this law if the entity makes notifications in accordance with its policies.</li>
      </ul>
    </div>),
    NE:
    (<div>
       <strong><h1>Nebraska</h1></strong>
       <strong><h3>Nebraska Revised Statutes 87-801</h3></strong>
      <ul style={{ listStyleType: "circle", paddingLeft: "20px" }}>
        <li>Enacted in 2006, Nebraska’s data breach notification law requires entities that conduct business in Nebraska and own or license computerized personal information of Nebraska residents to inform affected individuals of any unauthorized acquisition of unencrypted personal information.</li>
        <li>Notice must be made without unreasonable delay, unless an investigation determines it is unlikely the personal information will be used for unauthorized purposes.</li>
        <li>Breached third parties must notify and cooperate with the relevant data owners or licensees when it becomes aware of a breach.</li>
        <li>Substitute notice is permitted in specific circumstances and notification may be delayed for law enforcement purposes.</li>
        <li>Entities which maintain their own notification procedures as part of an information security policy consistent with state law are deemed to comply with the notification requirements of this law if the entity makes notifications in accordance with its policies. </li>
        <li>Entities that maintain security procedures in compliance with other state or federal legislation are deemed to comply with this law.</li>
      </ul>
    </div>),
    NV:
    (<div>
      <strong><h1>Nevada</h1></strong>
      <strong><h3>Nevada Revised Statutes 603A.010</h3></strong>
      <ul style={{ listStyleType: "circle", paddingLeft: "20px" }}>
        <li>Enacted in 2005, Nevada’s data breach notification law requires entities that own or license computerized personal information to inform Nevada residents of any unauthorized acquisition of their unencrypted personal information.</li>
        <li>Notice must be made without unreasonable delay </li>
        <li>If more than 1,000 individuals must be notified, breached entities must also notify all consumer reporting agencies.</li>
        <li>Breached third parties must notify the relevant data owners or licensees immediately following discovery of a breach.</li>
        <li>Substitute notice is permitted in specific circumstances and notification may be delayed for law enforcement purposes.</li>
        <li>Entities which maintain their own notification procedures as part of an information security policy consistent with state law are deemed to comply with the notification requirements of this law if the entity makes notifications in accordance with its policies.</li>
      </ul>
    </div>),
    NH:
    (<div>
      <strong><h1>New Hampshire</h1></strong>
      <strong><h3>New Hampshire Revised Statutes 359-C:20</h3></strong>
      <ul style={{ listStyleType: "circle", paddingLeft: "20px" }}>
        <li>Enacted in 2006, New Hampshire’s data breach notification law requires entities doing business in New Hampshire that own or license computerized personal information to notify affected individuals of any unauthorized acquisition of personal information where misuse of the information has occurred or is reasonably likely to occur.</li>
        <li>Notice must be made as soon as possible. </li>
        <li>Entities engaged in New Hampshire trade or commerce must notify the relevant regulator; all other entities must inform the Attorney General.</li>
        <li>Breached third parties must notify and cooperate with the relevant data owners or licensees immediately following discovery of the breach.</li>
        <li>If more than 1,000 individuals have to be notified of a breach, breached entities must also notify all consumer reporting agencies that compile and maintain files on consumers on a nationwide basis, as defined in 15 USC Section 1681a(p) unless they are subject to Title V of the GLBA.</li>
        <li>Substitute notice is permitted in specific circumstances and notification may be delayed for law enforcement purposes.</li>
        <li>Entities which maintain their own notification procedures as part of an information security policy consistent with other state or federal law are deemed to comply with the notification requirements of this law if the entity makes notifications in accordance with its policies.</li>
      </ul>
    </div>),
    NJ:
    (<div>
      <strong><h1>New Jersey</h1></strong>
      <strong><h3>New Jersey Statutes 56:8-163: Identity Theft Prevention Act</h3></strong>
      <ul style={{ listStyleType: "circle", paddingLeft: "20px" }}>
        <li>Enacted in 2005, New Jersey’s data breach notification law requires any entity that compiles or maintains computerized personal information to notify affected individuals of unauthorized access to unencrypted or unsecured personal information. </li>
        <li>Notice must be made without unreasonable delay, unless the entity determines misuse of the personal information is not reasonably possible. Disclosure is not required if the entity establishes that misuse of the information is not reasonably possible.</li>
        <li>Prior to disclosure, the entity must report the breach to the Division of State Police in the Department of Law and Public Safety for investigation or handling, which may include dissemination or referral to other appropriate law enforcement entities.  </li>
        <li>Breached third parties must notify relevant data owners or licensees immediately following discovery of a breach. </li>
        <li>If more than 1,000 individuals must be notified, breached entities must also notify all consumer reporting agencies that compile and maintain files on consumers on a nationwide basis, as defined in 15 USC Section 1681a.</li>
        <li>Substitute notice is permitted in specific circumstances and notification may be delayed for law enforcement purposes.</li>
        <li>Entities which maintain their own notification procedures as part of an information security policy consistent with state law are deemed to comply with the notification requirements of this law if the entity makes notifications in accordance with its policies. </li>
      </ul>
    </div>),
    NM:
    (<div>
      <strong><h1>New Mexico</h1></strong>
      <strong><h3>New Mexico Data Breach Act - HB 15</h3></strong>
      <ul style={{ listStyleType: "circle", paddingLeft: "20px" }}>
        <li>Enacted in 2017, New Mexico’s data breach notification law requires entities that own or license personal information of a New Mexico resident to notify affected individuals of any unauthorized acquisition of unencrypted/de-encrypted computerized data.</li>
        <li>Notification must be made no later than 45 calendar days after discovery of the breach. Breached third parties must also notify relevant data owners or licensees within 45 days. </li>
        <li>If notice must be provided to more than 1,000 New Mexico residents, notice must also be given to the attorney general and all consumer reporting agencies that compile and maintain files on consumers on a nationwide basis. The notice must include the number of New Mexico residents affected and include a copy of the notice that went to affected residents.</li>
        <li>Substitute notice is permitted in specific circumstances, and notification may be delayed for law enforcement purposes. </li>
        <li>Entities which maintain their own notification procedures as part of an information security policy consistent with state law are deemed to comply with the notification requirements of this law if the entity makes notifications in accordance with its policies.</li>
        <li>Organizations are exempt from the requirements of the legislation if they adhere to the Gramm-Leach-Bliley Act or the Health Insurance Portability and Accountability Act (HIPAA).</li>
      </ul>
    </div>),
    NY:
    (<div>
       <strong><h1>New York</h1></strong>
       <strong><h3>New York General Business Law 899-aa and State Technology Law 208</h3></strong>
      <ul style={{ listStyleType: "circle", paddingLeft: "20px" }}>
        <li>Enacted in 2005, New York’s data breach notification law requires entities which conduct business in New York and which own or license computerized private information, to notify New York residents of any unauthorized acquisition of their computerized personal information.</li>
        <li>Notice must be made without unreasonable delay. The Attorney General, the Consumer Protection Board, the NYS Division of State Police, and the Office of Information Technology Services must also be notified.</li>
        <li>If more than 5,000 New York residents must be notified, breached entities must also notify consumer reporting agencies.</li>
        <li>Breached third parties must notify relevant data owners or licensees immediately following discovery of the breach.</li>
        <li>Substitute notice is permitted in specific circumstances and notification may be delayed for law enforcement purposes.</li>
      </ul>
    </div>),
    NC:
    (<div>
      <strong><h1>North Carolina</h1></strong>
      <strong><h3>North Carolina General Statutes 75-61 and 75-65</h3></strong>
      <ul style={{ listStyleType: "circle", paddingLeft: "20px" }}>
        <li>Enacted in 2005, North Carolina’s data breach notification law requires entities that own or license the personal information of North Carolina residents to inform them of unauthorized acquisition of their unencrypted and unredacted personal information where illegal use of the personal information has occurred or is reasonably likely to occur or creates a material risk of harm to a consumer.</li>
        <li>Notice must be made without unreasonable delay. Notification must also be made to the Consumer Protection Division of the state’s Attorney General’s office.</li>
        <li>Breached third parties must notify the relevant data owners or licensees immediately following discovery of the breach. </li>
        <li>If more than 1,000 North Carolina residents must be notified, breached entities must also notify all consumer reporting agencies that compile and maintain files on consumers on a nationwide basis, as defined in 15 USC Section 1681a(p).</li>
        <li>Substitute notice is permitted in specific circumstances and notification may be delayed for law enforcement purposes.</li>
        <li>Financial institutions compliant with the Federal Interagency Guidance Response Programs for Unauthorized Access to Consumer Information and Customer Notice are deemed to comply with this law.</li>
      </ul>
    </div>),
    ND:
    (<div>
      <strong><h1>North Dakota</h1></strong>
      <strong><h3>North Dakota Century Code 51-30-01</h3></strong>
      <ul style={{ listStyleType: "circle", paddingLeft: "20px" }}>
        <li>Enacted in 2005, North Dakota’s data breach notification law requires entities that conduct business in North Dakota and that own or license computerized personal information to notify affected individuals of any unauthorized acquisition of their unencrypted personal information.</li>
        <li>Notice must be made without unreasonable delay. The Attorney General must be notified if more than 250 North Dakota residents are affected.</li>
        <li>Breached third parties must notify the relevant data owners or licensees immediately following discovery of the breach. </li>
        <li>Substitute notice is permitted in specific circumstances and notification may be delayed for law enforcement purposes.</li>
        <li>Entities which maintain their own notification procedures as part of an information security policy consistent with state law are deemed to comply with the notification requirements of this law if the entity makes notifications in accordance with its policies. </li>
        <li>Financial institutions in compliance with the Federal Interagency Guidance Response Programs for Unauthorized Access to Consumer Information and Customer Notice, and entities that are subject to Title 45 of the Code of Federal Regulations, subpart D, part 164 are deemed to comply with this law.</li>
      </ul>
    </div>),
    OH: 
    (<div>
      <strong><h1>Ohio</h1></strong>
      <strong><h3>Ohio Revised Code 1349.19</h3></strong>
      <ul style={{ listStyleType: "circle", paddingLeft: "20px" }}>
        <li>Enacted in 2005, Ohio’s data breach notification law requires entities that conduct business in Ohio and that own or license computerized personal information, to notify Ohio residents of any data breach that does result or could result in the unauthorized access and acquisition of their unencrypted or unredacted personal information that is likely to cause a risk of identity theft or fraud.</li>
        <li>Notice must be made in the most expedient time possible, no later than 45 days after discovery or notification of the breach. Breached third parties must notify the relevant data owners or licensees as well.</li>
        <li>If more than 1,000 individuals have to be notified of a breach, breached entities must also notify all consumer reporting agencies that compile and maintain files on consumers on a nationwide basis, unless they are covered by HIPAA.</li>
        <li>Substitute notice is permitted in specific circumstances and notification may be delayed for law enforcement purposes.</li>
        <li>Financial institutions compliant with the Federal Interagency Guidance Response Programs for Unauthorized Access to Consumer Information and Customer Notice are deemed to comply with this law.</li>
      </ul>
    </div>),
    OK:
    (<div>
      <strong><h1>Oklahoma</h1></strong>
      <strong><h3>24 Okla. Stat. § 161 et seq.</h3></strong>
      <ul style={{ listStyleType: "circle", paddingLeft: "20px" }}>
        <li>Enacted in 2008, Oklahoma’s data breach notification law requires entities that own or license computerized personal information of Oklahoma residents to notify them of any data breach that results in unauthorized access and acquisition of their unencrypted or unredacted personal information that is likely to cause a risk of identity theft or fraud.</li>
        <li>Notice must be made without unreasonable delay. </li>
        <li>Breached third parties must notify the relevant data owners or licensees as soon as practicable.  </li>
        <li>Substitute notice is permitted in specific circumstances and notification may be delayed for law enforcement purposes.</li>
        <li>Entities which maintain their own notification procedures as part of an information security policy consistent with state law are deemed to comply with the notification requirements of this law if the entity makes notifications in accordance with its policies. </li>
        <li>Financial institutions compliant with the Federal Interagency Guidance Response Programs for Unauthorized Access to Consumer Information and Customer Notice are deemed to comply with this law, as are entities that comply with relevant notification requirements of federal regulators.</li>
        <li>The state Attorney General or a district attorney may obtain actual damages for the violation of this law, or a civil penalty of up to $150,000 per breach.</li>
      </ul>
    </div>),
    OR:
    (<div>
      <strong><h1>Oregon</h1></strong>
      <strong><h3>Oregon Revised Statutes 646A.600: Oregon Consumer Identity Theft Protection Act</h3></strong>
      <ul style={{ listStyleType: "circle", paddingLeft: "20px" }}>
        <li>Enacted in 2007, Oregon’s data breach notification law requires entities that own, license, or possess personal information used in the course of the entity’s business to notify affected individuals of any unauthorized acquisition of unencrypted or unredacted personal information. </li>
        <li>Notice must be made in the most expedient manner possible and without unreasonable delay, no later than 45 days after discovering or receiving notice of the breach. At least one copy of the notice must also be sent to the Attorney General or other primary regulator.</li>
        <li>If more than 250 individuals must be notified, breached entities must also notify the Attorney General in the same manner as consumers. </li>
        <li>If more than 1,000 individuals must be notified, breached entities must also notify all consumer reporting agencies that compile and maintain files on consumers on a nationwide basis.</li>
        <li>Breached third parties must notify relevant data owners or licensees as soon as practicable following discovery of the breach.</li>
        <li>Notification is not required if an investigation or consultation with relevant authorities determines that the affected individuals are unlikely to be harmed by the information’s loss.</li>
        <li>Substitute notice is permitted in specific circumstances and notification may be delayed for law enforcement purposes.</li>
        <li>Entities that are compliant with the GLBA, with their federal regulators’ notification requirements, or with state or federal laws that provide greater protection for personal information are deemed to comply with this law.</li>
      </ul>
    </div>),
    PA:
    (<div>
      <strong><h1>Pennsylvania</h1></strong>
      <strong><h3>Pennsylvania Statutes 73-2301: Breach of Personal Information Notification Act</h3></strong>
      <ul style={{ listStyleType: "circle", paddingLeft: "20px" }}>
        <li>Enacted in 2006, Pennsylvania’s data breach notification law requires entities doing business in Pennsylvania that maintain, store, or manage computerized personal information of Pennsylvania residents to notify affected individuals of any data breach that results or could result in the unauthorized acquisition of their unencrypted and unredacted personal information.</li>
        <li>Notice must be made without unreasonable delay </li>
        <li>If more than 1,000 individuals must be notified, breached entities must also notify all consumer reporting agencies that compile and maintain files on consumers on a nationwide basis.</li>
        <li>Breached third parties must notify relevant data owners or licensees.</li>
        <li>Substitute notice is permitted in specific circumstances and notification may be delayed for law enforcement purposes.</li>
        <li>Entities which maintain their own notification procedures as part of an information security policy consistent with state law are deemed to comply with the notification requirements of this law if the entity makes notifications in accordance with its policies. </li>
        <li>Financial institutions compliant with the Federal Interagency Guidance Response Programs for Unauthorized Access to Consumer Information and Customer Notice are deemed to comply with this law, as are entities that comply with relevant notification requirements of federal regulators.</li>
      </ul>
    </div>),
    RI:
    (<div>
      <strong><h1>Rhode Island</h1></strong>
      <strong><h3>Rhode Island General Laws 11-49.3</h3></strong>
      <ul style={{ listStyleType: "circle", paddingLeft: "20px" }}>
        <li>Enacted in 2006, Rhode Island’s data breach notification law requires entities that store, own, collect, process, maintain, acquire, use, or license personal information to notify Rhode Island residents of any unauthorized access or acquisition of their unencrypted personal information which poses a significant risk of identity theft. </li>
        <li>Notice must be made in the most expedient time possible but no later than 45 calendar days after confirmation of the breach.</li>
        <li>If more than 500 Rhode Island residents must be notified, the Attorney General must be notified, along with major credit reporting agencies. </li>
        <li>Substitute notice is permitted in specific circumstances and notification may be delayed for law enforcement purposes.</li>
        <li>Entities which maintain their own notification procedures as part of an information security policy consistent with state law are deemed to comply with the notification requirements of this law if the entity makes notifications in accordance with its policies.</li>
        <li>Financial institutions compliant with the Federal Interagency Guidance Response Programs for Unauthorized Access to Consumer Information and Customer Notice are deemed to comply with this law, as are HIPAA-covered entities and entities that comply with relevant notification requirements of federal regulators.</li>
      </ul>
    </div>),
    SC:
    (<div>
      <strong><h1>South Carolina</h1></strong>
      <strong><h3>South Carolina Code 39-1-90</h3></strong>
      <ul style={{ listStyleType: "circle", paddingLeft: "20px" }}>
        <li>Enacted in 2008, South Carolina’s data breach notification law requires entities that conduct business in South Carolina, and that own or license computerized personal information, to notify South Carolina residents of unauthorized access to and acquisition of unencrypted or unredacted personal information when illegal use of the information creates a material risk of harm. </li>
        <li>Notice must be made without unreasonable delay. </li>
        <li>If more than 1,000 individuals must be notified, breached entities must notify the Consumer Protection Division of the Department of Consumer Affairs and all consumer reporting agencies that compile and maintain files on consumers on a nationwide basis.</li>
        <li>Breached third parties must notify relevant data owners or licensees immediately following discovery of a breach. </li>
        <li>Substitute notice is permitted in specific circumstances and notification may be delayed for law enforcement purposes.</li>
        <li>Entities which maintain their own notification procedures as part of an information security policy consistent with state law are deemed to comply with the notification requirements of this law if the entity makes notifications in accordance with its policies. </li>
        <li>Financial organizations in compliance with the GLBA are deemed to comply with this law, as are those that are compliant with the Federal Interagency Guidance Response Programs for Unauthorized Access to Consumer Information and Customer Notice.</li>
        <li>The Department of Consumer Affairs can levy administrative fines of up to $1,000 per affected South Carolina resident for entities that knowingly and wilfully violate this law.</li>
      </ul>
    </div>),
    SD:
    (<div>
      <strong><h1>South Dakota</h1></strong>
      <strong><h3>South Dakota’s Senate Bill 62</h3></strong>
      <ul style={{ listStyleType: "circle", paddingLeft: "20px" }}>
        <li>Enacted in 2018, South Dakota’s data breach notification law requires entities that conduct business in South Dakota, and that own or license computerized personal information of South Dakota residents, to notify affected individuals of the unauthorized acquisition of their unencrypted personal information. </li>
        <li>Notice must be made within 60 days of discovering the breach. Consumer reporting agencies and any credit bureaus must be notified without unreasonable delay. </li>
        <li>If more than 250 South Dakota residents must be notified, breached entities must also notify the Attorney General. </li>
        <li>Notice is not required if, following appropriate investigation and notification to the Attorney General, the entity reasonably believes the breach will not result in harm to affected individuals.</li>
        <li>Substitute notice is permitted in specific circumstances and notification may be delayed for law enforcement purposes.</li>
        <li>Entities in compliance with relevant federal and state regulations, HIPAA or the GLBA are deemed to comply with this law.</li>
        <li>Entities which maintain their own notification procedures as part of an information security policy consistent with state law are deemed to comply with the notification requirements of this law if the entity makes notifications in accordance with its policies.</li>
        <li>Financial organizations in compliance with the GLBA are deemed to comply with this law, as are those that are compliant with the Federal Interagency Guidance Response Programs for Unauthorized Access to Consumer Information and Customer Notice.</li>
        <li>The Attorney General is authorized to impose fines of up to $10,000 per day, per violation.</li>
      </ul>
    </div>),
    TN: 
    (<div>
      <strong><h1>Tennessee</h1></strong>
      <strong><h3>Tennessee Code 47-18-2107</h3></strong>
      <ul style={{ listStyleType: "circle", paddingLeft: "20px" }}>
        <li>Enacted in 2005, Tennessee’s data breach notification law requires entities that conduct business in Tennessee and that own or license computerized personal information to notify Tennessee residents of the unauthorized acquisition of their unencrypted personal information.</li>
        <li>Notice must be made immediately, but no later than 45 days from the discovery or notification of the breach. Breached third parties must also notify the relevant data owners or licensees within 45 days.</li>
        <li>If more than 1,000 individuals must be notified, breached entities must notify all consumer reporting agencies that compile and maintain files on consumers on a nationwide basis. </li>
        <li>Substitute notice is permitted in specific circumstances and notification may be delayed for law enforcement purposes.</li>
        <li>Entities which maintain their own notification procedures as part of an information security policy consistent with state law are deemed to comply with the notification requirements of this law if the entity makes notifications in accordance with its policies. </li>
        <li>Entities subject to the provisions of Title V of the GLBA are deemed to comply with this law.</li>
      </ul>
    </div>),
    TX:
    (<div>
      <strong><h1>Texas</h1></strong>
      <strong><h3>Texas Business and Commerce Code 521.002 and 521.053</h3></strong>
      <ul style={{ listStyleType: "circle", paddingLeft: "20px" }}>
        <li>Enacted in 2007, Texas’s data breach notification law requires entities that conduct business in Texas and own or license computerized personal information to notify affected individuals of the unauthorized acquisition of their personal information.</li>
        <li>Notice must be made as quickly as possible. </li>
        <li>Breached third parties must notify relevant data owners or licensees immediately after discovering the breach.</li>
        <li>If more than 10,000 individuals must be notified, breached entities must also notify all consumer reporting agencies that compile and maintain files on consumers on a nationwide basis.</li>
        <li>Substitute notice is permitted in specific circumstances and notification may be delayed for law enforcement purposes.</li>
        <li>Entities which maintain their own notification procedures as part of an information security policy consistent with state law are deemed to comply with the notification requirements of this law if the entity makes notifications in accordance with its policies. </li>
        <li>The Attorney General is authorized to enforce civil penalties of at least $2,000 but not more than $50,000 for each violation. Civil penalties for failure to comply with notification requirements are $100 per person to whom notification is due, per day, not to exceed $250,000 per breach.</li>
      </ul>
    </div>),
    UT:
    (<div>
      <strong><h1>Utah</h1></strong>
      <strong><h3>Utah Code 13-44-101, 13-44-202 and 13-44-301: Protection of Personal Information Act</h3></strong>
      <ul style={{ listStyleType: "circle", paddingLeft: "20px" }}>
        <li>Enacted in 2006, Utah’s data breach notification law requires entities that own or license computerized personal information relating to Utah residents to notify them of unauthorized acquisition of their personal information. </li>
        <li>Notice must be made without unreasonable delay, but notification is not required if a reasonable investigation determines it is unlikely that personal information has been or will be misused for identity theft or fraud.</li>
        <li>Breached third parties must notify and cooperate with relevant data owners or licensees immediately following discovery of the breach.</li>
        <li>Entities which maintain their own notification procedures as part of an information security policy consistent with state law are deemed to comply with the notification requirements of this law if the entity makes notifications in accordance with its policies. </li>
        <li>Civil penalties include fines of no more than $2,500 for a violation(s) concerning a specific consumer, and no more than $100,000 in the aggregate for related violations concerning more than one consumer.</li>
      </ul>
    </div>),
    VT:
    (<div>
      <strong><h1>Vermont</h1></strong>
      <strong><h3>Vermont Statutes Annotated 9-2430 and 2435</h3></strong>
      <ul style={{ listStyleType: "circle", paddingLeft: "20px" }}>
        <li>Enacted in 2006, Vermont’s data breach notification law requires entities that own or license computerized personal information relating to individuals residing in Vermont to notify them of the unauthorized acquisition of their personal information. </li>
        <li>Notice must be made without unreasonable delay, no later than 45 days after the discovery or notification of the breach.</li>
        <li>The Attorney General or the Department of Financial Regulation must be notified of any breach within 14 days of its discovery or the date on which affected individuals were notified.</li>
        <li>Notice is not required if the entity establishes that misuse of personal information is not reasonably possible, and the entity provides this determination along with a detailed explanation for said determination to the Attorney General, or to the Department of Banking, Insurance, Securities, and Health Care Administration.</li>
        <li>If more than 1,000 Vermont residents must be notified, breached entities must also notify all consumer reporting agencies that compile and maintain files on consumers on a nationwide basis.  </li>
        <li>Breached third parties must notify relevant data owners or licensees immediately following discovery of the breach.</li>
        <li>Substitute notice is permitted in specific circumstances and notification may be delayed for law enforcement purposes.</li>
        <li>Financial institutions compliant with the Federal Interagency Guidance Response Programs for Unauthorized Access to Consumer Information and Customer Notice are deemed to comply with this law, as are those that are subject to the National Credit Union Administration’s Final Guidance on Response Programs for Unauthorized Access to Member Information and Member Notice.</li>
      </ul>
    </div>),
    VA:
    (<div>
      <strong><h1>Virginia</h1></strong>
      <strong><h3>Virginia Code 18.2-186.6 and 32.1-127.1:05</h3></strong>
      <ul style={{ listStyleType: "circle", paddingLeft: "20px" }}>
        <li>Enacted in 2008, Virginia’s data breach notification law requires entities that own or license computerized personal information to notify Virginia residents any unauthorized acquisition of their unencrypted and unredacted personal information that could cause identity theft or fraud</li>
        <li>Notice must be made without unreasonable delay. The Attorney General must also be notified.</li>
        <li>If health information is involved, the Commissioner of Health must also be notified.</li>
        <li>If more than 1,000 individuals must be notified, breached entities must also alert all consumer reporting agencies and the Attorney General as to the notification.</li>
        <li>Breached third parties must notify relevant data owners or licensees without unreasonable delay following discovery of the breach.</li>
        <li>Substitute notice is permitted in specific circumstances and notification may be delayed for law enforcement purposes.</li>
        <li>Entities which maintain their own notification procedures as part of an information security policy consistent with state law are deemed to comply with the notification requirements of this law if the entity makes notifications in accordance with its policies.</li>
        <li>Entities that comply with HIPAA, the GLBA or relevant federal or state regulations also deemed to comply with this law.</li>
        <li>The Attorney General may impose a civil penalty not to exceed $150,000 per breach discovered in a single investigation. (This provision does not apply to health information breaches.)</li>
      </ul>
    </div>),
    WA:(
    <div>
      <strong><h1>Washington</h1></strong>
      <strong><h3>Washington Revised Code 19.255.010</h3></strong>
      <ul style={{ listStyleType: "circle", paddingLeft: "20px" }}>
        <li>Enacted in 2005, Washington’s data breach notification law requires entities that own or license personal information to notify Washington residents of unauthorized acquisition of unsecured personal information.</li>
        <li>Notice must be made without unreasonable delay, no later than 45 calendar days after discovery of the breach.</li>
        <li> Notice is not required if the breach is not reasonably likely to subject consumers to a risk of harm.</li>
        <li>If more than 500 Washington residents must be notified, the entity must also electronically submit a sample copy of the breach notification to the Attorney General, along with the number of Washington consumers affected by the breach.</li>
        <li>Breached third parties must notify relevant data owners or licensees immediately following discovery of the breach.</li>
        <li> Substitute notice is permitted in specific circumstances and notification may be delayed for law enforcement purposes.</li>
        <li> HIPAA covered entities and entities that maintain their own notification procedures are deemed to comply with the notification requirements of this law.</li>
      </ul>
    </div>),

    WV:
    (<div>
        <strong><h1>West Virginia</h1></strong>
        <strong><h3>West Virginia Code 46A-2A-101</h3></strong>
        <ul style={{ listStyleType: "circle", paddingLeft: "20px" }}>
          <li>Enacted in 2008, West Virginia’s data breach notification law requires entities that own or license computerized personal information to inform West Virginia residents of the unauthorized access and acquisition of their unencrypted and unredacted personal information that could cause identity theft or fraud.</li>
          <li>Notice must be made without unreasonable delay. </li>
          <li>Breached third parties must notify relevant data owners or licensees as soon as practicable following discovery of the breach.</li>
          <li>If more than 1,000 individuals must be notified, breached entities must also notify all consumer reporting agencies.</li>
          <li>Substitute notice is permitted in specific circumstances and notification may be delayed for law enforcement purposes.</li>
          <li>Entities which maintain their own notification procedures as part of an information security policy consistent with state law are deemed to comply with the notification requirements of this law if the entity makes notifications in accordance with its policies. </li>
          <li>Financial institutions compliant with the Federal Interagency Guidance Response Programs for Unauthorized Access to Consumer Information and Customer Notice are deemed to comply with this law, as are those that comply with relevant regulations.</li>
        </ul>
      </div>),
    WI:
    (<div>
      <strong><h1>Wisconsin</h1></strong>
      <strong><h3>Wisconsin Statutes 134.98</h3></strong>
      <ul style={{ listStyleType: "circle", paddingLeft: "20px" }}>
        <li>Enacted in 2006, Wisconsin’s data breach notification law requires entities that maintain or license personal information in Wisconsin to make reasonable efforts to notify affected individuals of the unauthorized acquisition of their unencrypted and unredacted personal information if there is a material risk of identity theft or fraud to the affected individual.</li>
        <li>Notice must be made within a reasonable time, not to exceed 45 dats after discovery of the breach. </li>
        <li>If more than 1,000 individuals must be notified, breached entities must also notify all consumer reporting agencies that compile and maintain files on consumers on a nationwide basis.</li>
        <li>Breached third parties must notify relevant data owners or licensees as soon as practicable</li>
        <li>Substitute notice is permitted in specific circumstances and notification may be delayed for law enforcement purposes.</li>
        <li>HIPAA-covered entities and those that are compliant with Title V of the GLBA are deemed to comply with this law.</li>
      </ul>
    </div>),
    WY:
    (<div>
      <strong><h1>Wyoming</h1></strong>
      <strong><h3>Wyoming Statutes 40-12-501 Statutes 40-12-501</h3></strong>
      <ul style={{ listStyleType: "circle", paddingLeft: "20px" }}>
        <li>Enacted in 2007, Wyoming’s data breach notification law requires entities that conduct business in Wyoming and own or license computerized personal information relating to Wyoming residents, to notify affected individuals of any unauthorized acquisition of personal information that may cause loss or injury to the resident.</li>
        <li>Notice must be made without unreasonable delay, and as soon as possible after an investigation determines personal information has been or is reasonably likely to be misused.</li>
        <li>Breached third parties must notify relevant data owners or licensees as soon as practicable. If breached third parties do not agree to notify affected individuals, the responsibility of notification falls on the data owner or licensee.</li>
        <li>Substitute notice is permitted in specific circumstances and notification may be delayed for law enforcement purposes.</li>
        <li>Financial institutions that maintain notification procedures compliant with certain, other laws are deemed to comply with this law.</li>
        <li>Health care organizations in compliance with HIPAA are deemed to comply with this law.</li>
      </ul>
    </div>),
  };

  return (
    <div style={{ textAlign: "center", position: "relative", padding: "20px", borderRadius: "10px" }}>
     
      
      <div style={{ flex: 2, display: "flex", justifyContent: "flex-end"}}>
      <img
        src="https://www.itgovernanceusa.com/images/USmap.png"
        alt="U.S. Map"
        useMap="#usmap"
        width="600"
        height="470"
        style={{ borderRadius: "10px", boxShadow: "0 4px 15px rgba(0, 0, 0, 0.15)", transition: "transform 0.3s" }}
      />
    </div>

      <map name="usmap">
        <area
          shape="poly"
          coords="401,236,430,234,439,263,443,267,441,276,445,288,415,293,417,300,411,302,403,304"  
          alt="Alabama"
          onMouseEnter={() => setHoveredState("AL")}
          onMouseLeave={() => setHoveredState(null)}
        />
        <area
          shape="poly"
          coords="174,463,173,449,182,439,175,434,162,414,155,416,144,405,156,346,140,336,127,325,101,327,99,340,97,347,92,341,85,341,84,351,93,357,83,361,71,365,69,379,87,401,48,407,0,394,29,410,68,413,92,415,108,404,126,399,158,428,145,412,165,438"  
          alt="Alaska"
          onMouseEnter={() => setHoveredState("AK")}
          onMouseLeave={() => setHoveredState(null)}
        />
        <area
          shape="poly"
          coords="109,206,165,215,160,293,137,290,91,267,102,243,101,219,107,215"  
          alt="Arizona"
          onMouseEnter={() => setHoveredState("AZ")}
          onMouseLeave={() => setHoveredState(null)}
        />
        <area
          shape="poly"
          coords="55,19,109,34,101,75,82,71,65,72,51,68,45,68,43,59,34,54,37,39,37,24,56,33" 
          alt="Washington"
          onMouseEnter={() => setHoveredState("WA")}
          onMouseLeave={() => setHoveredState(null)}
        />
        <area
          shape="poly"
          coords="88,127,147,139,149,107,122,86,114,54,113,37" 
          alt="Idaho"
          onMouseEnter={() => setHoveredState("ID")}
          onMouseLeave={() => setHoveredState(null)}
        />
         <area
          shape="poly"
          coords="326,223,380,219,376,225,383,226,380,237,375,248,369,260,373,269,337,270,330,259" 
          alt="Arkansas"
          onMouseEnter={() => setHoveredState("AR")}
          onMouseLeave={() => setHoveredState(null)}
        />
        <area
          shape="poly"
          coords="17,115,9,134,8,158,13,171,29,226,52,241,69,264,93,262,103,241,49,165,50,166,53,143,60,125,35,117" 
          alt="California"
          onMouseEnter={() => setHoveredState("CA")}
          onMouseLeave={() => setHoveredState(null)}
        />
        <area
          shape="poly"
          coords="170,159,244,162,245,217,165,215" 
          alt="Colorado"
          onMouseEnter={() => setHoveredState("CO")}
          onMouseLeave={() => setHoveredState(null)}
        />
        <area
          shape="poly"
          coords="540,102,555,97,560,106,550,110,541,115" 
          alt="Connecticut"
          onMouseEnter={() => setHoveredState("CT")}
          onMouseLeave={() => setHoveredState(null)}
        />
        <area
          shape="poly"
          coords="541,150,554,150,554,159,540,159"
          alt="Delaware"
          onMouseEnter={() => setHoveredState("DE")}
          onMouseLeave={() => setHoveredState(null)}
        />
        <area
          shape="poly"
          coords="446,290,478,290,487,286,501,310,505,320,516,336,517,357,511,370,480,333,480,315,461,300,445,306,434,298,414,302,414,291" 
          alt="Florida"
          onMouseEnter={() => setHoveredState("FL")}
          onMouseLeave={() => setHoveredState(null)}
        />
        <area
          shape="poly"
          coords="431,233,457,230,461,236,482,253,486,259,490,265,487,275,487,285,480,285,481,290,444,291,441,266,430,233" 
          alt="Georgia"
          onMouseEnter={() => setHoveredState("GA")}
          onMouseLeave={() => setHoveredState(null)}
        />
        <area
          shape="poly"
          coords="190,385,201,382,219,388,234,393,243,400,258,414,245,425,212,409"
          alt="Hawaii"
          onMouseEnter={() => setHoveredState("HI")}
          onMouseLeave={() => setHoveredState(null)}
        />
        <area
          shape="poly"
          coords="361,135,387,132,393,141,399,168,401,186,396,194,397,199,393,208,384,210,377,198,369,194,368,186,362,180,355,171,359,153,367,145,361,135,361,135"
          alt="Illinois"
          onMouseEnter={() => setHoveredState("IL")}
          onMouseLeave={() => setHoveredState(null)}
        />
        <area
          shape="poly"
          coords="395,142,423,138,429,178,423,185,415,192,407,196,396,198,400,184,399,168" 
          alt="Indiana"
          onMouseEnter={() => setHoveredState("IN")}
          onMouseLeave={() => setHoveredState(null)}
        />
         <area
          shape="poly"
          coords="299,127,351,123,355,132,366,143,359,154,356,164,334,167,309,165,301,141" 
          alt="Iowa"
          onMouseEnter={() => setHoveredState("IA")}
          onMouseLeave={() => setHoveredState(null)}
        />
         <area
          shape="poly"
          coords="243,176,243,219,325,218,322,185,317,175" 
          alt="Kansas"
          onMouseEnter={() => setHoveredState("KS")}
          onMouseLeave={() => setHoveredState(null)}
        />
        <area
          shape="poly"
          coords="384,218,385,209,391,207,395,199,401,194,407,194,413,190,419,189,423,182,428,176,433,173,442,179,452,176,464,192,450,206" 
          alt="Kentucky"
          onMouseEnter={() => setHoveredState("KY")}
          onMouseLeave={() => setHoveredState(null)}
        />
        <area
          shape="poly"
          coords="336,270,370,270,373,277,369,288,367,296,390,297,390,305,393,312,399,320,387,320,375,319,365,316,353,316,340,318,340,296,336,271,336,270,336,271" 
          alt="Louisiana"
          onMouseEnter={() => setHoveredState("LA")}
          onMouseLeave={() => setHoveredState(null)}
        />
        <area
          shape="poly"
          coords="545,48,549,43,549,35,548,21,551,12,556,12,562,8,569,13,575,28,587,36,582,48,576,53,576,53,570,60,564,65,562,77,556,72,550,59,550,59,550,59,550,59" 
          alt="Maine"
          onMouseEnter={() => setHoveredState("ME")}
          onMouseLeave={() => setHoveredState(null)}
        />
        <area
          shape="poly"
          coords="487,159,486,152,494,150,502,148,524,143,529,155,534,159,535,164,514,167,513,154,507,153,507,153" 
          alt="Maryland"
          onMouseEnter={() => setHoveredState("MD")}
          onMouseLeave={() => setHoveredState(null)}
        />
        <area
          shape="poly"
          coords="568,83,582,82,585,90,568,91,539,102,538,92,557,86,560,80,562,84,562,88,567,90,571,91,579,94,565,100,558,95,549,98" 
          alt="Massachusetts"
          onMouseEnter={() => setHoveredState("MA")}
          onMouseLeave={() => setHoveredState(null)}
        />
        <area
          shape="poly"
          coords="406,78,395,84,389,90,392,96,382,92,379,84,362,82,355,77,365,71,379,62,374,70,385,72,396,72,405,68,407,72,414,71,422,77,412,82,398,100,400,113,404,127,403,140,438,134,440,127,445,117,436,97,426,109,429,96,430,87" 
          alt="Michigan"
          onMouseEnter={() => setHoveredState("MI")}
          onMouseLeave={() => setHoveredState(null)}
        />
         <area
          shape="poly"
          coords="289,49,305,51,307,43,318,54,328,51,339,56,362,58,341,75,337,86,334,93,335,105,353,122,301,129,297,97" 
          alt="Minnesota"
          onMouseEnter={() => setHoveredState("MN")}
          onMouseLeave={() => setHoveredState(null)}
        />
         <area
          shape="poly"
          coords="402,237,402,303,390,304,388,296,365,296,372,278,368,268,366,261,370,249,375,240" 
          alt="Mississippi"
          onMouseEnter={() => setHoveredState("MS")}
          onMouseLeave={() => setHoveredState(null)}
        />
        <area
          shape="poly"
          coords="326,223,376,219,373,225,380,225,381,217,385,210,379,202,370,196,372,187,364,184,357,173,355,164,310,167,317,175,323,192" 
          alt="Missouri"
          onMouseEnter={() => setHoveredState("MO")}
          onMouseLeave={() => setHoveredState(null)}
        />
        <area
          shape="poly"
          coords="119,37,117,53,128,70,125,85,133,96,150,101,141,100,226,105,226,77,226,51" 
          alt="Montana"
          onMouseEnter={() => setHoveredState("MT")}
          onMouseLeave={() => setHoveredState(null)}
        />
        <area
          shape="poly"
          coords="224,135,225,161,243,163,244,178,314,175,309,160,300,137,283,135" 
          alt="Nebraska"
          onMouseEnter={() => setHoveredState("NE")}
          onMouseLeave={() => setHoveredState(null)}
        />
        <area
          shape="poly"
          coords="59,125,49,167,97,233,107,215,120,138,87,131" 
          alt="Nevada"
          onMouseEnter={() => setHoveredState("NV")}
          onMouseLeave={() => setHoveredState(null)}
        />
         <area
          shape="poly"
          coords="545,90,559,85,562,78,554,66,545,47,544,53,544,63,542,75" 
          alt="New Hampshire"
          onMouseEnter={() => setHoveredState("NH")}
          onMouseLeave={() => setHoveredState(null)}
        />
         <area
          shape="poly"
          coords="536,135,549,135,549,145,536,145,528,115,542,119,537,125,544,131,538,151,530,146,527,142,533,133,527,126" 
          alt="New Jersey"
          onMouseEnter={() => setHoveredState("NJ")}
          onMouseLeave={() => setHoveredState(null)}
        />
        <area
          shape="poly"
          coords="165,213,160,293,171,291,186,285,232,287,232,217" 
          alt="New Mexico"
          onMouseEnter={() => setHoveredState("NM")}
          onMouseLeave={() => setHoveredState(null)}
        />
        <area
          shape="poly"
          coords="476,123,520,109,527,116,542,118,540,107,538,93,533,80,529,70,526,61,512,65,501,81,502,92,489,100,477,103,479,109,474,117" 
          alt="New York"
          onMouseEnter={() => setHoveredState("NY")}
          onMouseLeave={() => setHoveredState(null)}
        />
        <area
          shape="poly"
          coords="474,202,536,188,532,196,540,195,540,201,533,205,538,210,534,215,523,222,522,230,513,232,499,223,488,225,472,221,457,230,442,231" 
          alt="North Carolina"
          onMouseEnter={() => setHoveredState("NC")}
          onMouseLeave={() => setHoveredState(null)}
        />
        <area
          shape="poly"
          coords="227,53,228,94,298,94,289,51" 
          alt="North Dakota"
          onMouseEnter={() => setHoveredState("ND")}
          onMouseLeave={() => setHoveredState(null)}
        />
        <area
          shape="poly"
          coords="422,137,435,135,448,137,459,130,467,124,471,144,471,158,466,163,461,170,458,180,452,176,442,179,429,173" 
          alt="Ohio"
          onMouseEnter={() => setHoveredState("OH")}
          onMouseLeave={() => setHoveredState(null)}
        />
        <area
          shape="poly"
          coords="235,217,232,217,232,223,267,225,268,253,298,262,329,260,324,217,233,217" 
          alt="Oklahoma"
          onMouseEnter={() => setHoveredState("OK")}
          onMouseLeave={() => setHoveredState(null)}
        />
        <area
          shape="poly"
          coords="37,56,25,81,13,109,44,118,24,112,61,124,87,128,95,99,104,75,61,70" 
          alt="Oregon"
          onMouseEnter={() => setHoveredState("OR")}
          onMouseLeave={() => setHoveredState(null)}
        />
        <area
          shape="poly"
          coords="466,123,473,117,476,122,520,109,528,116,527,125,534,133,528,142,474,156,471,143,469,133" 
          alt="Pennsylvania"
          onMouseEnter={() => setHoveredState("PA")}
          onMouseLeave={() => setHoveredState(null)}
        />
        <area
          shape="poly"
          coords="565,105,578,105,578,114,564,114" 
          alt="Rhode Island"
          onMouseEnter={() => setHoveredState("RI")}
          onMouseLeave={() => setHoveredState(null)}
        />
        <area
          shape="poly"
          coords="468,222,481,223,487,225,498,223,514,232,509,243,502,254,496,259,492,267,485,258,479,251,457,232,468,222" 
          alt="South Carolina"
          onMouseEnter={() => setHoveredState("SC")}
          onMouseLeave={() => setHoveredState(null)}
        />
         <area
          shape="poly"
          coords="226,94,225,135,285,136,300,136,298,125,299,103,297,93" 
          alt="South Dakota"
          onMouseEnter={() => setHoveredState("SD")}
          onMouseLeave={() => setHoveredState(null)}
        />
         <area
          shape="poly"
          coords="383,217,470,203,467,210,459,213,451,221,444,230,411,236,378,239" 
          alt="Tennessee"
          onMouseEnter={() => setHoveredState("TN")}
          onMouseLeave={() => setHoveredState(null)}
        />
         <area
          shape="poly"
          coords="230,284,232,223,266,225,267,254,308,263,321,259,337,266,334,285,345,299,337,317,318,330,302,340,295,355,299,370,277,363,263,339,250,320,233,319,226,327,211,313,188,286" 
          alt="Texas"
          onMouseEnter={() => setHoveredState("TX")}
          onMouseLeave={() => setHoveredState(null)}
        />
         <area
          shape="poly"
          coords="120,136,110,207,165,213,171,157,149,155,151,141,137,139" 
          alt="Utah"
          onMouseEnter={() => setHoveredState("UT")}
          onMouseLeave={() => setHoveredState(null)}
        />
        <area
          shape="poly"
          coords="526,61,542,54,545,60,542,75,546,89,538,93,532,80" 
          alt="Vermont"
          onMouseEnter={() => setHoveredState("VT")}
          onMouseLeave={() => setHoveredState(null)}
        />
        <area
          shape="poly"
          coords="463,192,473,193,484,183,487,171,493,166,499,155,506,155,513,156,515,161,518,165,525,170,528,176,524,181,529,183,534,189,451,207,457,200" 
          alt="Virginia"
          onMouseEnter={() => setHoveredState("VA")}
          onMouseLeave={() => setHoveredState(null)}
        />
        <area
          shape="poly"
          coords="484,153,486,158,494,153,503,149,506,155,499,155,492,169,485,177,483,188,470,194,462,189,455,182,458,171,464,163,473,156,473,155" 
          alt="West Virginia"
          onMouseEnter={() => setHoveredState("WV")}
          onMouseLeave={() => setHoveredState(null)}
        />
        <area
          shape="poly"
          coords="338,80,354,73,354,78,360,82,370,83,378,84,385,94,382,103,387,98,388,113,387,123,389,132,360,136,355,129,352,121,345,114,335,106,333,95" 
          alt="Wisconsin"
          onMouseEnter={() => setHoveredState("WI")}
          onMouseLeave={() => setHoveredState(null)}
        />
        <area
          shape="poly"
          coords="150,155,156,98,189,102,223,106,225,161,201,161,178,159" 
          alt="Wyoming"
          onMouseEnter={() => setHoveredState("WY")}
          onMouseLeave={() => setHoveredState(null)}
        />

        {/* Add more areas for other states */}

      </map>

      {/* Tooltip for displaying state information */}
      {hoveredState && (
      <div
      style={{
        width: "40vw", 
        position: "absolute",
        bottom: "0",
        right: "105%", 
        backgroundColor: "rgba(255, 255, 255, 0.95)", 
        border: "1px solid #3498db",
        borderRadius: "8px",
        padding: "20px",
        boxShadow: "0 4px 20px rgba(0, 0, 0, 0.2)",
        fontSize: "14px",
        color: "#34495e",
        zIndex: 10,
        transition: "opacity 0.3s ease",
        textAlign: "left",
        overflowY: "auto",
        maxHeight: "100vh", 
      }}
    >
      {stateData[hoveredState] || "No data available"}
    </div>

      
      )}
    </div>
  );
};

export default USMapWithImageMap;
