import { NgModule, ModuleWithProviders, SkipSelf, Optional } from '@angular/core';
import { Configuration } from './configuration';
import { HttpClient } from '@angular/common/http';

import { AdministrationService } from './api/administration.service';
import { AppRoutingService } from './api/appRouting.service';
import { AuthenticatorService } from './api/authenticator.service';
import { AuthorizationService } from './api/authorization.service';
import { AutocompleteService } from './api/autocomplete.service';
import { BetaFeaturesService } from './api/betaFeatures.service';
import { BodyService } from './api/body.service';
import { ContactMeService } from './api/contactMe.service';
import { ContactsService } from './api/contacts.service';
import { ContextAccessibiltyService } from './api/contextAccessibilty.service';
import { ContextAutocompleteService } from './api/contextAutocomplete.service';
import { ContextEquipmentService } from './api/contextEquipment.service';
import { ContextGlossaryService } from './api/contextGlossary.service';
import { ContextHelpService } from './api/contextHelp.service';
import { ContextLinkService } from './api/contextLink.service';
import { ContextMediaService } from './api/contextMedia.service';
import { ContextMetricsService } from './api/contextMetrics.service';
import { ContextNotesService } from './api/contextNotes.service';
import { ContextQuizService } from './api/contextQuiz.service';
import { ContextSideService } from './api/contextSide.service';
import { ContextStoriesService } from './api/contextStories.service';
import { ContextTechniqueProgressService } from './api/contextTechniqueProgress.service';
import { ContextTechniqueTargetingService } from './api/contextTechniqueTargeting.service';
import { ContributorService } from './api/contributor.service';
import { CurriculumService } from './api/curriculum.service';
import { DecisionCollectionService } from './api/decisionCollection.service';
import { DecisionFlowService } from './api/decisionFlow.service';
import { DecisionNTXService } from './api/decisionNTX.service';
import { EvaluationService } from './api/evaluation.service';
import { FeaturesService } from './api/features.service';
import { FlagsService } from './api/flags.service';
import { FormationService } from './api/formation.service';
import { GamePlannerService } from './api/gamePlanner.service';
import { InvitationsService } from './api/invitations.service';
import { ManageClaimsService } from './api/manageClaims.service';
import { ManageRolesService } from './api/manageRoles.service';
import { ManageUsersService } from './api/manageUsers.service';
import { MonetizationService } from './api/monetization.service';
import { NoDbService } from './api/noDb.service';
import { PartnerService } from './api/partner.service';
import { PaymentsService } from './api/payments.service';
import { PositionalsService } from './api/positionals.service';
import { PracticePlanService } from './api/practicePlan.service';
import { ProjectToolsService } from './api/projectTools.service';
import { SetupService } from './api/setup.service';
import { SimService } from './api/sim.service';
import { SimpleEventService } from './api/simpleEvent.service';
import { SimpleMessageService } from './api/simpleMessage.service';
import { SimpleSensorService } from './api/simpleSensor.service';
import { SiteServicesService } from './api/siteServices.service';
import { SportsQuotesService } from './api/sportsQuotes.service';
import { TeamsService } from './api/teams.service';
import { TechniqueAccessibilityService } from './api/techniqueAccessibility.service';
import { TechniqueAchievementService } from './api/techniqueAchievement.service';
import { TechniqueNotesService } from './api/techniqueNotes.service';
import { TechniqueRelationshipsService } from './api/techniqueRelationships.service';
import { TechniqueSeriesService } from './api/techniqueSeries.service';
import { TechniquesService } from './api/techniques.service';
import { TenancyService } from './api/tenancy.service';
import { TrashTalkService } from './api/trashTalk.service';
import { VCardsService } from './api/vCards.service';
import { VersionReleaseNotesService } from './api/versionReleaseNotes.service';
import { WeatherForecastService } from './api/weatherForecast.service';

@NgModule({
  imports:      [],
  declarations: [],
  exports:      [],
  providers: []
})
export class SoccrApiModule {
    public static forRoot(configurationFactory: () => Configuration): ModuleWithProviders<SoccrApiModule> {
        return {
            ngModule: SoccrApiModule,
            providers: [ { provide: Configuration, useFactory: configurationFactory } ]
        };
    }

    constructor( @Optional() @SkipSelf() parentModule: SoccrApiModule,
                 @Optional() http: HttpClient) {
        if (parentModule) {
            throw new Error('SoccrApiModule is already loaded. Import in your base AppModule only.');
        }
        if (!http) {
            throw new Error('You need to import the HttpClientModule in your AppModule! \n' +
            'See also https://github.com/angular/angular/issues/20575');
        }
    }
}
