import { useEffect } from 'react';
import ReactGA from 'react-ga4';

/**
 * Hook to track referrals from AI platforms (ChatGPT, Claude, Perplexity, etc.)
 * Sends GA4 events with custom dimensions when AI traffic is detected via referrer or UTM parameters
 *
 * Custom Dimensions/Parameters sent to GA4:
 * - ai_platform: Name of the AI platform (e.g., "ChatGPT", "Claude")
 * - ai_source_type: Type of source ("referrer" or "utm")
 * - ai_landing_page: Page where user landed
 * - utm_source, utm_medium, utm_campaign: Standard UTM parameters
 */
export function useAIReferralTracking() {
  useEffect(() => {
    // Only run once on mount
    const referrer = document.referrer.toLowerCase();
    const params = new URLSearchParams(window.location.search);
    const utmSource = params.get('utm_source')?.toLowerCase();
    const utmMedium = params.get('utm_medium')?.toLowerCase();
    const utmCampaign = params.get('utm_campaign')?.toLowerCase();
    const landingPage = window.location.pathname;

    // AI platform referrer patterns
    const aiPlatforms = [
      { name: 'ChatGPT', patterns: ['chat.openai.com', 'chatgpt.com'] },
      { name: 'Claude', patterns: ['claude.ai'] },
      { name: 'Perplexity', patterns: ['perplexity.ai'] },
      { name: 'Google Bard', patterns: ['bard.google.com'] },
      { name: 'Bing Chat', patterns: ['bing.com/chat'] },
      { name: 'You.com', patterns: ['you.com'] },
      { name: 'Phind', patterns: ['phind.com'] },
      { name: 'Komo', patterns: ['komo.ai'] },
    ];

    // Check referrer for AI platforms
    for (const platform of aiPlatforms) {
      for (const pattern of platform.patterns) {
        if (referrer.includes(pattern)) {
          console.log(`AI referral detected from ${platform.name}`);

          // Send GA4 event with custom dimensions
          ReactGA.event({
            category: 'AI Discovery',
            action: 'Referral',
            label: platform.name,
            // Custom dimensions for GA4
            ai_platform: platform.name,
            ai_source_type: 'referrer',
            ai_landing_page: landingPage,
            ai_referrer_url: referrer,
          });

          // Store in sessionStorage to avoid duplicate tracking
          sessionStorage.setItem('ai_referral_tracked', platform.name);
          return;
        }
      }
    }

    // Check UTM parameters for AI sources
    if (utmSource) {
      const aiSources = [
        'chatgpt',
        'claude',
        'perplexity',
        'bard',
        'bing-chat',
        'ai-search',
        'llm',
        'ai-assistant',
      ];

      for (const source of aiSources) {
        if (utmSource.includes(source)) {
          console.log(`AI referral detected via UTM: ${utmSource}`);

          ReactGA.event({
            category: 'AI Discovery',
            action: 'UTM Referral',
            label: utmSource,
            // Custom dimensions for GA4
            ai_platform: source,
            ai_source_type: 'utm',
            ai_landing_page: landingPage,
            utm_source: utmSource,
            utm_medium: utmMedium || 'none',
            utm_campaign: utmCampaign || 'none',
          });

          sessionStorage.setItem('ai_referral_tracked', utmSource);
          return;
        }
      }
    }

    // Check for AI in utm_medium
    if (utmMedium && (utmMedium.includes('ai') || utmMedium.includes('llm') || utmMedium.includes('chatbot'))) {
      console.log(`AI referral detected via UTM medium: ${utmMedium}`);

      ReactGA.event({
        category: 'AI Discovery',
        action: 'UTM Medium',
        label: utmMedium,
        // Custom dimensions for GA4
        ai_platform: 'Unknown AI',
        ai_source_type: 'utm',
        ai_landing_page: landingPage,
        utm_source: utmSource || 'unknown',
        utm_medium: utmMedium,
        utm_campaign: utmCampaign || 'none',
      });

      sessionStorage.setItem('ai_referral_tracked', utmMedium);
    }
  }, []); // Empty dependency array - run once on mount
}
